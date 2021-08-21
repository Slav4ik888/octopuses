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
import GettingPermission from '../../components/auth/permissions/getting-permissions-container/getting-permissions-container';
// Types & Consts
import { Errors } from '../../../types/results';
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
  errors: Errors;
  setErrors: (errors: Errors) => void;
};

const SignUp: React.FC<Props> = ({errors, setErrors }) => {

  // Согласие пользователя на обр перс данных
  const [permissions, setPermissions] = React.useState(false);

  // Согласие на обработку данных
  const handlePermisson = (newChecks: { policy: boolean, sending: boolean }) => {
    const { policy, sending } = newChecks;
    const errorPermissions = [policy, sending].filter(v => v).length === 1;
    setPermissions(errorPermissions);
  };


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
              <TextField
                label="Выберите город" name="locality" required fullWidth
                type="text" autoComplete="locality" autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Фамилия" name="secondName" fullWidth autoComplete="sName"
                helperText={errors?.secondName} error={errors?.secondName ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Имя" name="name" required fullWidth autoComplete="fname"
                helperText={errors?.name} error={errors?.name ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Отчество" name="lastName" fullWidth autoComplete="lname"
                helperText={errors?.lastName} error={errors?.lastName ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email" name="email" type="email" required fullWidth autoComplete="email"
                helperText={errors?.email} error={errors?.email ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Номер телефона" name="mobileNumber" required fullWidth autoComplete="phone"
                helperText={errors?.mobileNumber} error={errors?.mobileNumber ? true : false}
              />
            </Grid>
            <Grid item xs={12}  sm={6}>
              <TextField
                label="Пароль" name="password" type="password" required fullWidth autoComplete="current-password"
                helperText={errors?.password} error={errors?.password ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Подтвердите пароль" name="confirmPassword" type="password" required fullWidth
                helperText={errors?.confirmPassword} error={errors?.confirmPassword ? true : false}
              />
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

          <GettingPermission onPermission={handlePermisson} />
          {/* <ActionMain type={ToggleLoginSignup.SIGNUP} onSubmit={handleSubmit} />
          <ActionHelps type={ToggleLoginSignup.SIGNUP } /> */}
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default SignUp;