import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export const noSSR = ({children}: Props) => {
  return (
    process.browser && {children}
  )
}