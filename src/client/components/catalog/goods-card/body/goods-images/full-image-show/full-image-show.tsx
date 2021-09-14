import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Icons
import IconNoImage from '../../../../../../icons/icon-no-image';
// Components
import DialogInfo from '../../../../../dialogs/dialog-info/dialog-info';
// Functions
import { getGoodsPath } from '../../../../../../utils/path/path';
// Types
import { GoodsImage } from '../../../../../../../types/catalog';


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
    }}
  >
    {
      item.url
        ? <img src={getGoodsPath(item.url)} alt={item.label} style={{ width: `100%` }} />
        : <IconNoImage width={`100%`} height={`100%`} />
    }
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

