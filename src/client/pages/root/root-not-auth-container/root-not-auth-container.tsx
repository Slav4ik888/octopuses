import * as React from 'react';
// MUI Stuff
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


type Props = {
  authenticated: boolean;
};


// Главная страница неавторизованного пользователя
const RootNotAuthContainer: React.FC<Props> = ({ authenticated }) => {
  if (authenticated) return null;


  return (
    <Container
      maxWidth={`xl`}
      sx={{
        '& .MuiContainer-root': {
          p: 0
        },
        backgroundColor: `#fffff8`,
        margin: `auto`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        // backgroundImage: `url('../public/img/fon.jpg')`,
        // backgroundPosition: `bottom`,
        // backgroundSize: `cover`,
        // backgroundRepeat: `no-repeat`,
        // position: `absolute`,
        // top: 0, right: 0, bottom: 0, left: 0,
        
        height: `calc(100vh - 64px)`,
      }}>
      
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          maxWidth: `1200px`,
          height: `50%`,
          textAlign: `center`,
          // zIndex: 200,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: `0.8rem`, sm: `1.2rem`, md: `1.6rem` },
            padding: 3,
            // textTransform: `uppercase`,
            zIndex: 200,
            color: `#a7a7a7`,
          }}
        >
          Товары для здоровья
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: `1.5rem`, sm: `3rem`, md: `4rem` },
            fontWeight: 600,
            fontFamily: `Roboto, Arial`,
            lineHeight: 1.2,
            zIndex: 200,
            color: `secondary.main`,
            textShadow: `1px 1px 4px #6ab2dd`,
          }}
        >
          Осьминожки
        </Typography>
        
      </Box>
    </Container>
  );
}

export default RootNotAuthContainer;
