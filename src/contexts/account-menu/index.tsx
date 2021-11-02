import { createContext, useState } from 'react';
import { AccountMenuContextProps, AccountMenuProviderProps } from './interface';

export const AccountMenuContext = createContext({} as AccountMenuContextProps)

export const AccountMenuProvider = ({ children }: AccountMenuProviderProps) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return <AccountMenuContext.Provider value={{ open, anchor, handleClick, handleClose }}>{children}</AccountMenuContext.Provider>
}