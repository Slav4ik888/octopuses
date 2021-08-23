import * as React from 'react';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Components
import ActionToggle from './action-toggle/action-toggle';
import RecoveryPasswordContainer from './recovery-password-container/recovery-password-container';
// Types
import { ToggleLoginSignup } from '../../../../../types/user';


type Props = {
  type: ToggleLoginSignup;
}

const ActionHelps: React.FC<Props> = (props: Props) => {
  const { type } = props;

  return (
    <Box sx={{ m: 1, p: 1 }}>
      <ActionToggle type={type} />
      <RecoveryPasswordContainer />
    </Box>
  )
};

export default ActionHelps;