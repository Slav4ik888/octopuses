import * as React from 'react';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../../utils/routes/routes';
// MUI Stuff
import Button from '@mui/material/Button';
// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';



type Props = {
  authenticated: boolean;
};


// Кнопка Navbar для входа в авторизацию
const AuthBtn: React.FC<Props> = ({ authenticated }) => {
  if (authenticated) return null;

  return (
    <Link to={RouteType.LOGIN}>
      <Button
        sx={{
          p: [1, 3, 1, 3],
          m: [0, 2, 0, 2],
          color: `primary.contrastText`,
        }}
        endIcon={<AccountCircle />}
      >
        Войти
      </Button>
    </Link>
  );
};

export default AuthBtn;