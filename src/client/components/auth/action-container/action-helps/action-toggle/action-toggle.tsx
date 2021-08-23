import * as React from 'react';
import { Link } from 'react-router-dom';
// MUI Stuff
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// Functions
import route from '../../../../../utils/routes/routes';
// Types
import { ToggleLoginSignup } from '../../../../../../types/user';


type Props = {
  type: ToggleLoginSignup;
}

const ActionToggle: React.FC<Props> = (props: Props) => {
  const { type } = props;
  let Body: JSX.Element;

  switch (type) {
    case ToggleLoginSignup.LOGIN:
      Body = (
        <Typography variant="body2">Нет аккаунта? - <Link to={route.SIGNUP}>зарегистрируйтесь</Link></Typography>
      );
      break;
    case ToggleLoginSignup.SIGNUP:
      Body = (
        <Typography variant="body2">Уже есть аккаунт? - <Link to={route.LOGIN}>войдите</Link></Typography>
      )
  }
  
  return (
    <Box sx={{ m: 1 }}>
      {
        Body
      }
    </Box>
  )
};

export default ActionToggle;
