import { Alert, Button, Checkbox, Container, FormControlLabel, Snackbar, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/authentication'

export const SignIn = () => {
  const [error, setError] = useState({
    openError: false,
    errorMessage: ''
  })

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setError({
      openError: false,
      errorMessage: ''
    });
  };
  const { openError, errorMessage } = error;

  const { signIn } = useContext(AuthContext)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get('email')?.toString()
    const password = data.get('password')?.toString()

    if (!email || !password) return;
    try {
      await signIn({
        email,
        password
      })
    } catch (err) {
      if (err instanceof Error) {
        const buildError = {
          openError: true,
          errorMessage: err.message,
          vertical: 'top',
          horizontal: 'center'
        }
        setError(buildError)
      }
    }

  }

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            name="email"
            type="email"
            label="email"
            autoComplete="email"
            fullWidth
            required
          />

          <TextField
            margin="normal"
            name="password"
            type="password"
            label="password"
            fullWidth
            autoComplete="current-password"
            required
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Permarnecer conectado"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Snackbar
            open={openError}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            autoHideDuration={5000}
            onClose={handleClose}
          >
            <Alert
              severity="error"
              variant="filled"
              sx={{ width: '100%' }}
              onClose={handleClose}
            >
              {errorMessage}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Container>
  )
}