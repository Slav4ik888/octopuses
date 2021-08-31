import * as React from 'react';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Components
import DialogInfo from '../../dialogs/dialog-info/dialog-info';
// Types
import { GoodsImage } from '../../../../types/catalog';



  // img: {
  //   margin: theme.spacing(0),
  //   padding: theme.spacing(0),
  //   width: `100%`,
  //   boxShadow: `none`,
  //   border: `none`,
  // },


type Props = {
  open: boolean;
  item: GoodsImage;
  onClose: () => void;
};


const FullImageShow: React.FC<Props> = ({ open, item, onClose }) => {


  const FullImage = (<Box
    sx={{
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      width: `100%`,
      mt: 2,
      p: 1,
      pb: 2,
      border: `1px solid #4a94bb`,
      borderRadius: `13px`,
      backgroundColor: `#fff`,
      boxShadow: `1px 1px 7px #c1e3f5`,
    }}>
    <img src={item.url} alt={item.label} style={{ width: `100%` }} />
  </Box>);


  return (
    <DialogInfo
      open={open}
      title={item.label}
      maxWidth="lg"
      children={FullImage}
      onClose={onClose}
    />
  );
};


export default FullImageShow;

