import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { client } from '../../graphql/main';
import { USER_LOGIN } from '../../graphql/queries/login';
import { UserLoginInterface } from '../../graphql/queries/login/interface';
import { localstorage, routers } from '../../utils/constants';
import { AuthContextInterface, AuthProviderInterface, LoggedUserInterface, SignInInterface } from './interface';

export const AuthContext = createContext({} as AuthContextInterface)

export const AuthProvider = ({ children }: AuthProviderInterface) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUserInterface | null>(null)
  const router = useRouter()

  const signIn = async ({ email, password }: SignInInterface) => {
    try {
      const { data: { login: { token, user } } } = await client.query<UserLoginInterface>({
        query: USER_LOGIN,
        variables: {
          email,
          password
        }
      })
      setLoggedUser({ token, user })
      localStorage.setItem(localstorage.user_token, token)
      await router.push(routers.home)
    } catch (error) {
      console.error(error)
    }
  }

  const logOut = async () => {
    localStorage.removeItem(localstorage.user_token)
    setLoggedUser(null)
    await router.push(routers.home)
  }

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
