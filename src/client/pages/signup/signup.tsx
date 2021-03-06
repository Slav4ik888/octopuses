import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { userSignup } from '../../redux/actions/user-actions';
import { setErrors } from '../../redux/actions/ui-actions';
import { getErrors } from '../../redux/selectors/ui-selectors';
import { State } from '../../redux/redux-types';
// MUI Stuff
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
import { ToggleLoginSignup, UserSignupData } from '../../../types/user';
import { LOCATION } from '../../../consts/consts';


const locations = arrFromObjByObj(LOCATION, `LOCATION`);



const getUserSignupData = (formdata: FormData) => ({
  firstName: formdata.get(`firstName`),
  secondName: formdata.get(`secondName`),
  middleName: formdata.get(`middleName`),
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

  // ?????????? ?????????????????????? ????????????
  const [location, setLocation] = React.useState(locations[0]);
  const handleLocation = (item: { LOCATION: string }) => {
    console.log('item: ', item);
    setLocation(item);
  };


  // ???????????????? ???????????????????????? ???? ?????? ???????? ????????????
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
    userSignupData.location = location?.LOCATION || ``;
    console.log('userSignupData: ', userSignupData);
    
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
          ??????????????????????
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ListSelect
                label="???????????????? ??????????"
                items={locations}
                valueField={`LOCATION`}
                fullWidth
                placeholder={locations[0].LOCATION}
                type={ListSelectType.LOCATION}
                onSelected={handleLocation}
              />
              <Box sx={{ color: `#d32f2f`, fontSize: `0.8rem` }}>
                {
                  errors.location ? errors.location : null
                }
              </Box>
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="??????????????" name="secondName" fullWidth autoComplete="sName"
                helperText={errors?.secondName} error={errors?.secondName ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="??????" name="firstName" required fullWidth autoComplete="fname"
                helperText={errors?.firstName} error={errors?.firstName ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="????????????????" name="middleName" fullWidth autoComplete="lname"
                helperText={errors?.middleName} error={errors?.middleName ? true : false}
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
                label="?????????? ????????????????" name="mobileNumber" required fullWidth autoComplete="phone"
                helperText={errors?.mobileNumber} error={errors?.mobileNumber ? true : false}
              />
            </Grid>
            <Grid item xs={12}  sm={6}>
              <TextField
                label="????????????" name="password" type="password" required fullWidth autoComplete="current-password"
                helperText={errors?.password} error={errors?.password ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="?????????????????????? ????????????" name="confirmPassword" type="password" required fullWidth
                helperText={errors?.confirmPassword} error={errors?.confirmPassword ? true : false}
              />
            </Grid>
           
            
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>


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