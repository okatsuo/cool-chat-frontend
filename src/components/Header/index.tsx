import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authentication';
import { Avatar } from '@mui/material';

export const MenuAppBar = () => {
  const { loggedUser } = useContext(AuthContext)
  const { name, email } = loggedUser!.user
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cool chat
          </Typography>
          <Avatar />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: 1
          }}>
            <Typography>{name}</Typography>
            <Typography>{email}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}