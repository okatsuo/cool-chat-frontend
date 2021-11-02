import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authentication';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountMenuContext, AccountMenuProvider } from '../../contexts/account-menu';

export const MenuAppBar = () => {
  const { loggedUser, logOut } = useContext(AuthContext)
  const { handleClick, anchor, handleClose, open } = useContext(AccountMenuContext)
  const { name, email } = loggedUser!
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cool chat
          </Typography>
          <IconButton>
            <Avatar />
          </IconButton>
          <span style={{ cursor: 'pointer' }} onClick={handleClick}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: 1
              }}
            >
              <Typography>{name}</Typography>
              <Typography>{email}</Typography>
            </Box>
          </span>
        </Toolbar>
        <Menu
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => { handleClose(); logOut() }}>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box >
  );
}