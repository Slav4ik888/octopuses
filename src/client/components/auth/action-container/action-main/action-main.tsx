import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../redux/selectors/ui-selectors';
import { getLoadingUser } from '../../../../redux/selectors/user-selectors.js';
// MUI Stuff
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Components
import CircularProgress from '../../../buttons/circular-progress/circular-progress';
// Types
import { Errors } from '../../../../../types/results';
import { ToggleLoginSignup } from '../../../../../types/user';
import { State } from '../../../../redux/redux-types';




type Props = {
  type: ToggleLoginSignup;
  loading: boolean;
  errors: Errors;
  disabled?: boolean;
  onSubmit?: (e: any) => void;
}

// Кнопка "Зарегистрироваться" | "Войти"
const ActionMain: React.FC<Props> = ({ type, loading, errors, disabled, onSubmit }) => {

  const nameBtn = type === ToggleLoginSignup.LOGIN ? `Войти` : `Зарегистрироваться`;

  return (
    <Box sx={{ mt: 3}}>
      {
        errors.general && (
          <Typography
            variant="body2"
            sx={{
              color: `red`,
              // fontSize: `0.8rem`,
              mt: 1.5,
            }}
          >
            {errors.general}
          </Typography>
        )
      }
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading || disabled}
      >
        {
          nameBtn
        }
        <CircularProgress loading={loading} />
      </Button>
    </Box>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingUser(state),
  errors: getErrors(state),
});

export default connect(mapStateToProps)(ActionMain);
