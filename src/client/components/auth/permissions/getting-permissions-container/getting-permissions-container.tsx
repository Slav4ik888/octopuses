import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../redux/selectors/ui-selectors';
// MUI Stuff
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
// Components
import DialogInfo from '../../../dialogs/dialog-info/dialog-info';
import ShowPolicyText from '../show-policy-text/show-policy-text';
// Functions
// Types
import { Errors } from '../../../../../types/results';
import { State } from '../../../../redux/redux-types';



type Props = {
  errors: Errors;
  onPermission: (newChecks: { policy: boolean, sending: boolean }) => void;
}

// Рендер одного задания из TasksContainer
const GettingPermissionsContainer: React.FC<Props> = ({ errors, onPermission }) => {

  const [checks, setChecks] = React.useState({ policy: false, sending: false });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecks = { ...checks, [e.target.name]: e.target.checked };
    setChecks(newChecks);
    onPermission(newChecks);
  };


  const [openPolicy, setOpenPolicy] = React.useState(false);
  const handlePolicyOpen = () => setOpenPolicy(true);
  const handlePolicyClose = () => setOpenPolicy(false);

  return (
    <Box
      sx={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        m: { xs: `8px 0`, sm: `24px 0 16px` },
        textAlign: `left`,
        fontSize: `0.8rem`,
        lineHeight: 1.4,
      }}
    >
      
      <Box
        sx={{
          display: `flex`,
          alignItems: `center`,
          m: `4px 0`,
        }}
      >
        <Checkbox
          sx={{
            pr: 1.2,
            color: `secondary.main`
          }}
          onChange={handleChange}
          name="policy"
        />
        <Box
          sx={{
            display: `inline`,
            fontSize: `0.8rem`,
            lineHeight: 1.4,
          }}
        >
          Выражаю своё согласие на обработку персональных данных в соответствии с&nbsp;
          <Box
            sx={{
              display: `inline`,
              cursor: `pointer`,
              color: `secondary.main`,
              '&:hover': {
                textDecoration: `underline`,
              },
            }}
            onClick={handlePolicyOpen}
          >
            «Политикой конфиденциальности»
          </Box>
        </Box>
      </Box>

      {/* <FormControlLabel
        value="Разрешаю"
        control={<Checkbox className={classes.checkbox} onChange={handleChange} name="sending" />}
        label="Разрешаю отправлять на указанную электронную почту сообщения: о результатах выполненных мною заданий, об изменниях на сайте, которые могут быть мне полезны."
        labelPlacement="end"
        className={classes.label}
      /> */}

      <Box
        sx={{
          marginTop: 1,
          color: `#f44336`,
        }}
      >
        {
          errors.permissions ? errors.permissions : null
        }
      </Box>

      <DialogInfo
        open={openPolicy}
        title={`Политика конфиденциальности`}
        children={<ShowPolicyText />}
        onClose={handlePolicyClose}
      />
    </Box>
  );
};

const mapStateToProps = (state: State) => ({
  errors: getErrors(state),
});

export default connect(mapStateToProps)(GettingPermissionsContainer);
