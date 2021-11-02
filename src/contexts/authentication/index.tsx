import { createContext } from 'react';
import { AuthContextProps, AuthProviderProps } from './interface';

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = 'bom dia grupo'
  return (<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>)
}
