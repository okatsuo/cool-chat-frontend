import Router from 'next/router';
import { createContext, useState } from 'react';
import { client } from '../../graphql/main';
import { USER_LOGIN } from '../../graphql/queries/login';
import { UserLoginInterface } from '../../graphql/queries/login/interface';
import { AuthContextInterface, AuthProviderInterface, LoggedUserInterface, SignInInterface } from './interface';

export const AuthContext = createContext({} as AuthContextInterface)

export const AuthProvider = ({ children }: AuthProviderInterface) => {
  const [user, setUser] = useState<LoggedUserInterface | null>(null)
  const signIn = async ({ email, password }: SignInInterface) => {
    try {
      const { data: { login: { token, user } } } = await client.query<UserLoginInterface>({
        query: USER_LOGIN,
        variables: {
          email,
          password
        }
      })
      setUser({ token, user })
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  console.log(user)
  return (<AuthContext.Provider value={{ user, signIn }}>{children}</AuthContext.Provider>)
}
