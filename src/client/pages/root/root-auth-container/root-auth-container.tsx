import * as React from 'react';
// MUI Stuff
import Grid from '@mui/material/Grid';
// Components
// import GreetingOffer from '../../../components/promo/greeting-offer/greeting-offer';
// import DemoSubscribeOffer from '../../../components/promo/demo-subscribe-offer/demo-subscribe-offer';
// import SubsribeOffer from '../../../components/promo/subscribe-offer/subscribe-offer';

// Functions
import { noRootAuthContainer } from '../../../utils/check-display-rights/check-display-rights';


type Props = {
  authenticated: boolean;
  isSuper: boolean;
  isVerified: boolean;
};




const RootAuthContainer: React.FC<Props> = ({ authenticated, isSuper }) => {
  if (noRootAuthContainer(authenticated)) return null;


  return (
    <>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item sm />
        <Grid item sm={6}>

          {/* <GreetingOffer />
          <DemoSubscribeOffer />
          <SubsribeOffer /> */}
            
        </Grid>
        <Grid item sm />
      </Grid>
    </>
  );
};


export default RootAuthContainer;
