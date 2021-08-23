import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { userSignup } from '../../redux/actions/user-actions';
import { setErrors } from '../../redux/actions/ui-actions';
import { getErrors } from '../../redux/selectors/ui-selectors';
import { State } from '../../redux/redux-types';
// MUI Stuff
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// Components
import ListSelect from '../../components/lists/list-select/list-select';
import GettingPermission from '../../components/auth/permissions/getting-permissions-container/getting-permissions-container';
import ActionMain from '../../components/auth/action-container/action-main/action-main';
import ActionHelps from '../../components/auth/action-container/action-helps/action-helps';
import Copyright from '../../components/auth/copyright/copyrignt';
// Functions
import { validationSignupData } from '../../../utils/validators/base/validators';
import { arrFromObjByObj } from '../../../utils/objects/objects/objects';
// Types & Consts
import { ListSelectType } from '../../../types/btn';
import { Errors } from '../../../types/results';
import { ToggleLoginSignup, Locations, UserSignupData } from '../../../types/user';



const locations = arrFromObjByObj(Locations, `LOCATION`);
console.log('locations: ', locations);



const getUserSignupData = (formdata: FormData) => ({
  firstName: formdata.get(`firstName`),
  secondName: formdata.get(`secondName`),
  lastName: formdata.get(`lastName`),
  email: formdata.get(`email`),
  mobileNumber: formdata.get(`mobileNumber`),
  password: formdata.get(`password`),
  confirmPassword: formdata.get(`confirmPassword`),
  location: ``,
  permissions: false,
});



type Props = {
  errors: Errors;
  history: any[];
  setErrors: (errors: Errors) => void;
  userSignup: (newSignData: UserSignupData, history?: any[]) => void;
};



const SignUp: React.FC<Props> = ({errors, history, setErrors, userSignup }) => {

  // Выбор населённого пункта
  const [location, setLocation] = React.useState(locations[0]);
  const handleLocation = (item: { LOCATION: string }) => {
    console.log('item: ', item);
    setLocation(item);
  };


  // Согласие пользователя на обр перс данных
  const [permissions, setPermissions] = React.useState(false);
  const handlePermisson = (newChecks: { policy: boolean, sending: boolean }) => {
    const { policy, sending } = newChecks;
    const errorPermissions = [policy, sending].filter(v => v).length === 1;
    setPermissions(errorPermissions);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userSignupData = getUserSignupData(data);
    userSignupData.permissions = permissions;
    userSignupData.location = location;
    
    const { valid, errors } = validationSignupData(userSignupData);
    if (!valid) setErrors(errors);
    else userSignup(userSignupData, history);
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
          Регистрация
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ListSelect
                label="Выберите город"
                items={locations}
                valueField={`LOCATION`}
                fullWidth
                placeholder={locations[0]}
                type={ListSelectType.LOCATION}
                onSelected={handleLocation}
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
                label="Имя" name="firstname" required fullWidth autoComplete="fname"
                helperText={errors?.firstname} error={errors?.firstname ? true : false}
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

          {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Зарегистрироваться
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" color="secondary">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}

          <GettingPermission onPermission={handlePermisson} />
          <ActionMain type={ToggleLoginSignup.SIGNUP} onSubmit={handleSubmit} />
          <ActionHelps type={ToggleLoginSignup.SIGNUP } />
        </Box>
      </Box>

      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

const mapStateToProps = (state: State) => ({
  errors: getErrors(state),
});

const mapActionsToProps = {
  userSignup, setErrors
};


export default connect(mapStateToProps, mapActionsToProps)(SignUp);