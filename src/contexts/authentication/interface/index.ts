import { ReactNode } from 'react';
import { UserProfileInterface } from '../../../graphql/queries/user-profile/interface';

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
  loggedUser: UserProfileInterface | null
  signIn: (signin_data: SignInInterface) => Promise<void>
  logOut: () => Promise<void>
}