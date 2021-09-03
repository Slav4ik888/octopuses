import * as React from 'react';
// import { Link } from 'react-router-dom';
// MUI Stuff
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// Functions
import { RouteType } from '../../../../../utils/routes/routes';
// Types
import { ToggleLoginSignup } from '../../../../../../types/user';


type Props = {
  type: ToggleLoginSignup;
}

const ActionToggle: React.FC<Props> = (props: Props) => {
  const { type } = props;
  let route = ``, text = ``, link = ``;

  switch (type) {
    case ToggleLoginSignup.LOGIN:
      route = RouteType.SIGNUP;
      text = `Нет аккаунта? - `;
      link = `зарегистрируйтесь`;
      break;
    
    case ToggleLoginSignup.SIGNUP:
      route = RouteType.LOGIN;
      text = `Уже есть аккаунт? - `;
      link = `войдите`;
      break;
  }
  
  return (
    <Box sx={{ m: 1, display: `flex`, justifyContent: `center` }}>
      <Typography
        variant="body2"
      >
        { text }
        <Link
          color="secondary"
          sx={{
            color: `palette.secondary.main`,
            textDecoration: `underline`,
            '& .hover': {
              textDecoration: `none`
            }
          }}
          href={route}
        >
          { link }
        </Link>
      </Typography>
    </Box>
  )
};

export default ActionToggle;
