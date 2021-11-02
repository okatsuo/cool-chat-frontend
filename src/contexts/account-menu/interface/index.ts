import { ReactNode } from 'react';

export interface AccountMenuProviderProps {
  children: ReactNode
}

export interface AccountMenuContextProps {
  open: boolean
  anchor: null | HTMLElement
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleClose: () => void
}