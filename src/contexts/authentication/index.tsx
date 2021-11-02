import Router from 'next/router';
import { createContext } from 'react';
import { client } from '../../graphql/main';
import { USER_LOGIN } from '../../graphql/queries/login';
import { AuthContextInterface, AuthProviderInterface, SignInInterface } from './interface';

export const AuthContext = createContext({} as AuthContextInterface)

export const AuthProvider = ({ children }: AuthProviderInterface) => {

  const signIn = async ({ email, password }: SignInInterface) => {
    try {
      const { data } = await client.query({
        query: USER_LOGIN,
        variables: {
          email,
          password
        }
      })
      console.log(data)
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  const user = 'bom dia grupo'
  return (<AuthContext.Provider value={{ user, signIn }}>{children}</AuthContext.Provider>)
}
