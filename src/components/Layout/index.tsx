import { Container } from '@mui/material'
import { ReactNode } from 'react'
import { MenuAppBar } from '../Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MenuAppBar />
      <Container>
        <div>{children}</div>
      </Container>
    </>
  )
}