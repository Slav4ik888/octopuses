import * as React from 'react';
import cl from 'classnames';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../utils/routes/routes';
// MUI Stuff
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// Types & Consts
import { LogoBtnType } from '../../../../types/btn';


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
        <img src="./img/logo_rec.png" alt="Логотип" style={{ height: `100%` }} />
      </Box>
    </Link>
  );
};


export default LogoBtn;