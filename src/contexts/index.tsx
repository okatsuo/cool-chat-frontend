import { ReactNode } from 'react'
import { AccountMenuProvider } from './account-menu'
import { AuthProvider } from './authentication'

interface ContextApiProvidersProps {
  children: ReactNode
}

export const ContextApiProviders = ({ children }: ContextApiProvidersProps) => {
  return (
    <AuthProvider>
      <AccountMenuProvider>
        {children}
      </AccountMenuProvider>
    </AuthProvider>
  )
}