import { ReactNode } from 'react';

export interface AuthProviderInterface {
  children: ReactNode
}

export interface SignInInterface  {
  email: string
  password: string
}

export interface AuthContextInterface {
  user: string
  signIn: (signin_data: SignInInterface) => Promise<void>
}