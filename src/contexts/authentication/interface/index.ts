import { ReactNode } from 'react';

export interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextProps {
  user: string
}