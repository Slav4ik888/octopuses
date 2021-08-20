import * as React from 'react';
// MUI Stuff
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// Components
// import LogoBtn from '../../components/buttons/logo-btn/logo-btn';
// Types & Consts
// import { LogoBtnType } from '../../../types/btn';
import { RouteType } from '../../../types/types';



function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={RouteType.ROOT}>
        Осьминожки
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


type Props = {

};

const SignUp: React.FC<Props> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get(`name`),
      secondName: data.get(`secondName`),
      lastName: data.get(`lastName`),
      email: data.get(`email`),
      mobileNumber: data.get(`mobileNumber`),
      password: data.get(`password`),
      confirmPassword: data.get(`confirmPassword`),
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
          Sign up
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Выберите город" name="locality" required fullWidth type="text" autoComplete="locality" autoFocus />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Фамилия" name="secondName" fullWidth autoComplete="sName" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Имя" name="name" required fullWidth autoComplete="fname" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Отчество" name="lastName" fullWidth autoComplete="lname" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email" name="email" type="email" required fullWidth autoComplete="email" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Номер телефона" name="mobileNumber" required fullWidth autoComplete="phone" />
            </Grid>
            <Grid item xs={12}  sm={6}>
              <TextField label="Пароль" name="password" type="password" required fullWidth autoComplete="current-password" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Подтвердите пароль" name="confirmPassword" type="password" required fullWidth />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Зарегистрироваться
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" color="secondary">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default SignUp;