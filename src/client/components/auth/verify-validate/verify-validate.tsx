import * as React from 'react';
// MUI Stuff
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Types
import themes from '../../../utils/themes/themes';



const textStyle = {
  fontSize: { xs: `1rem`, sm: `1.2rem` },
  mt: 1, mr: 0, mb: 1, ml: 0,
};



type Props = {
  email: string;
};



// Приветствие нового пользователя
const VerifyValidate: React.FC<Props> = ({ email }) => {

  return (
    <>
      <Paper
        sx={{
          display: `flex`,
          flexDirection: `column`,
          p: {xs: 1, sm: 4},
          mt: 3, mr: 0, ml: 0, mb: 5,
          backgroundColor: themes.background.paper,
          position: `relative`,
          zIndex: 100,
        }}
      >
        <Typography sx={textStyle}>
          Для продолжения, пройдите пожалуйста по ссылке, которая была отправлена на указанный адрес электронной почты: <strong>{email}</strong>
          </Typography>

        <Typography sx={textStyle}>
          Обычно письмо приходит в течение нескольких секунд, но иногда может пройти 1-2 минуты.
          </Typography>

        <Typography sx={textStyle}>
          Если вы не получили письмо, посмотрите пожалуйста в папке "Спам".
          </Typography>

        <Typography sx={{ fontStyle: `italic`, color: `#837437` }}>
          Если по ошибке вы ввели не верный адрес электронной почты, зарегистрируйтесь пожалуйста заново.
        </Typography>
      </Paper>
    </>
  );
};


export default VerifyValidate;
