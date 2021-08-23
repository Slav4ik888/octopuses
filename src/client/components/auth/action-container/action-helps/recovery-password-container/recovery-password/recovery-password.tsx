import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { sendPasswordResetEmail } from '../../../../../../redux/actions/user-actions';
import { setErrors } from '../../../../../../redux/actions/ui-actions';
// MUI Stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// Components
import DialogInfo from '../../../../../dialogs/dialog-info/dialog-info';
import CircularProgress from '../../../../../buttons/circular-progress/circular-progress';
// Types
import { Errors } from '../../../../../../../types/results';



type Props = {
  open: boolean;
  loading: boolean;
  errors: Errors;
  sendPasswordResetEmail: (email: string) => void;
  setErrors: (errors: Errors) => void;
  onClose: () => void;
}

const RecoveryPasswod: React.FC<Props> = (props: Props) => {
  const { open, loading, errors, setErrors, sendPasswordResetEmail, onClose } = props;

  const emailRef = React.useRef(null);

  const handleSendPasswordResetEmail = () => {
    const email = emailRef.current.value;
    if (email) {
      onClose();
      sendPasswordResetEmail(email);
    } else {
      setErrors({ email: `Поле email не должно быть пустым` });
    }
  };
  
  return (
    <>
      <DialogInfo
        open={open}
        maxWidth="xs"
        onClose={onClose}
        title="Восстановление пароля"
      >
        <div>
          <DialogContent>
            <Typography
              variant="h5"
              sx={{
                m: { xs: 0, sm: 2 },
                fontSize: { xs: `1rem` },
              }}
            >
              Введите ваш email, мы отправим на него ссылку для восстановления пароля.
            </Typography>

            <TextField fullWidth name="email" type="email" label="Введите email"
              sx={{
                m: { xs: 0, sm: 2 },
                fontSize: { xs: `1rem` },
              }}
              inputRef={emailRef}
              helperText={errors.email}
              error={errors.email ? true : false}
            />
          </DialogContent>
          <DialogActions sx={{ p: 4 }}>
            {
              errors.general && (
                <Typography
                  variant="body2"
                  sx={{
                    color: `red`,
                    fontSize: `0.8rem`,
                    marginTop: 10,
                  }}
                >
                  {errors.general}
                </Typography>
              )
            }
            <Button onClick={handleSendPasswordResetEmail} variant="contained" color="primary"
              sx={{ mr: 2 }}
              disabled={loading}
            >
              Отправить <CircularProgress loading={loading} />
            </Button>
          </DialogActions>
        </div>
      </DialogInfo>
    </>
  )
};

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.user.loading,
  errors: state.UI.errors,
});

const mapActionsToProps = {
  sendPasswordResetEmail,
  setErrors,
};

export default connect(mapStateToProps, mapActionsToProps)(RecoveryPasswod);
