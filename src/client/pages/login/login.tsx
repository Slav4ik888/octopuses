import * as React from 'react';
// MUI Stuff
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// Components
import ActionMain from '../../components/auth/action-container/action-main/action-main';
import ActionHelps from '../../components/auth/action-container/action-helps/action-helps';
import Copyright from '../../components/auth/copyright/copyrignt';
// Types & Consts
import { Errors } from '../../../types/results';
import { ToggleLoginSignup } from '../../../types/user';




type Props = {
  errors: Errors;
  setErrors: (errors: Errors) => void;
};

const Login: React.FC<Props> = ({errors, setErrors }) => {



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get(`email`),
      // mobileNumber: data.get(`mobileNumber`),
      password: data.get(`password`),
    });
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', boxShadow: `0px 0px 9px #6bb2dd` }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Войти
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                label="Email" name="email" type="email" required fullWidth autoComplete="email"
                helperText={errors?.email} error={errors?.email ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Пароль" name="password" type="password" required fullWidth autoComplete="current-password"
                helperText={errors?.password} error={errors?.password ? true : false}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                label="Номер телефона" name="mobileNumber" required fullWidth autoComplete="phone"
                helperText={errors?.mobileNumber} error={errors?.mobileNumber ? true : false}
              />
            </Grid> */}
          </Grid>
          

          <ActionMain type={ToggleLoginSignup.LOGIN} onSubmit={handleSubmit} />
          <ActionHelps type={ToggleLoginSignup.LOGIN } />
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Login;