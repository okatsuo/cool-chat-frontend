import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { client } from '../../graphql/main';
import { USER_LOGIN } from '../../graphql/queries/login';
import { UserLoginInterface } from '../../graphql/queries/login/interface';
import { USER_PROFILE } from '../../graphql/queries/user-profile';
import { UserProfileInterface } from '../../graphql/queries/user-profile/interface';
import { localstorage, routers } from '../../utils/constants';
import { AuthContextInterface, AuthProviderInterface, SignInInterface } from './interface';

export const AuthContext = createContext({} as AuthContextInterface)

export const AuthProvider = ({ children }: AuthProviderInterface) => {
  const [loggedUser, setLoggedUser] = useState<UserProfileInterface | null>(null)
  const router = useRouter()

  const signIn = async ({ email, password }: SignInInterface) => {
    const { data: { login: { token, user } } } = await client.query<UserLoginInterface>({
      query: USER_LOGIN,
      variables: {
        email,
        password
      }
    })
    localStorage.setItem(localstorage.user_token, token)
    setLoggedUser(user)
    await router.push(routers.home)
  }

  const logOut = async () => {
    localStorage.removeItem(localstorage.user_token)
    setLoggedUser(null)
    await router.push(routers.home)
  }

  useEffect(() => {
    const token = localStorage.getItem(localstorage.user_token)
    if (token !== null) {
      console.log('entrou ?');
      client.query<{ userProfile: UserProfileInterface }>({
        query: USER_PROFILE,
        variables: {
          token: 'Bearer ' + token
        }
      }).then(({ data: { userProfile } }) => {
        setLoggedUser(userProfile)
      })
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        signIn,
        logOut
      }}>
      {children}
    </AuthContext.Provider>)
}
