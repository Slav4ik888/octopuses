import * as React from 'react';
// MUI Stuff
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// Icons
import EmailIcon from '@material-ui/icons/EmailRounded';
import PhoneIcon from '@material-ui/icons/Phone';
// Consts
import themes from '../../../../utils/themes/themes';


const PhoneBtn: React.FC = () => {
  return (
    <Box sx={{ display: `flex`, alignItems: `center`, margin: { xs: `16px 0 8px 0` } }}>
      <Link
        href="tel:+79041327888"
        sx={{
          display: `flex`,
          alignItems: `center`,
          color: themes.header.color,
          textDecoration: `none`,
          textAlign: `center`,
        }}
      >
        <div>
          +7
          <span style={{ paddingLeft: `5px` }}>(</span>
          904
          <span style={{ paddingRight: `5px` }}>)</span>
          13-27-888
        </div>
        <PhoneIcon
          sx={{
            // ml: 1,
            // position: `absolute`,
            // top: `13px`,
            transform: `rotate(250deg)`,
          }}
        />

      </Link>
    </Box>
  )
};

export default PhoneBtn;