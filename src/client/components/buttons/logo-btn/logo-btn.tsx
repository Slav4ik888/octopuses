import * as React from 'react';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../utils/routes/routes';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Types & Consts
import { LogoBtnType } from '../../../../types/btn';

const logoPath = `https://firebasestorage.googleapis.com/v0/b/octopuses-9fa85.appspot.com/o/logo_rec.png?alt=media&token=3529a0ac-aeae-41b8-862b-0aa887a8e4eb`;

const logeStyle = {
  borderStyle: `none`,
  // width: `130px`,
  height: `50px`,
  maxWidth: `100%`,
  margin: 0,
  padding: 0,
  background: `inherit`,
  border: 0,
  boxShadow: `none`,
};
  
const mainStyle = {
  width: 200,
  marginBottom: 30,
};

const authStyle = {
  height: `37px`,
  paddingTop: `12px`,
}


type Props = {
  type: LogoBtnType;
};


// Кнопка логотипа
const LogoBtn: React.FC<Props> = ({ type }) => {

  // const classes = useStyles();
  
  let logo = {};

  switch (type) {
    case LogoBtnType.NAV_UP:
      logo = logeStyle;
      break;
    
    case LogoBtnType.NAV_DOWN:
      logo = logeStyle;
      break;
    
    case LogoBtnType.MAIN_PAGE:
      logo = Object.assign(logeStyle, mainStyle);

    case LogoBtnType.AUTH:
      logo = Object.assign(logeStyle, authStyle);

      
  }

  return (
    <Link to={RouteType.ROOT}>
      <Box sx={logo} >
        <img src={logoPath} alt="Логотип" style={{ height: `100%` }} />
      </Box>
    </Link>
  );
};


export default LogoBtn;