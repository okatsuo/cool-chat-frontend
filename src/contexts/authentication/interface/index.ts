import { ReactNode } from 'react';

export interface AuthProviderInterface {
  children: ReactNode
}

export interface SignInInterface  {
  email: string
  password: string
}

export interface LoggedUserInterface {
  token: string,
  user: {
    id: number
    name: string
    email: string
    created_at: Date
    updated_at: Date
  }
}

export interface AuthContextInterface {
  user: LoggedUserInterface | null
  signIn: (signin_data: SignInInterface) => Promise<void>
}