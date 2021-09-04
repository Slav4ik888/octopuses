import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Icons
import IconNoImage from '../../../../../icons/icon-no-image';
// Components
import FullImageShow from './full-image-show/full-image-show';
// Functions
import { getImagePath } from '../../../../../utils/path/path';
// Types
import { GoodsImage } from '../../../../../../types/catalog';


type Props = {
  images: Array<GoodsImage>;
}


// Страница для каталога товаров
const GoodsImages: React.FC<Props> = ({ images }) => {

  const [selected, setSelected] = React.useState(images[0]);
  
  const [fullImage, setFullImage] = React.useState(false);
  const handleFullImageOpen = () => setFullImage(true);
  const handleFullImageClose = () => setFullImage(false);


  return (
    <>
      <Box
        onClick={handleFullImageOpen}
        sx={{
          overflowY: `hidden`,
          height: `120px`,
          cursor: `pointer`,
          width: `100%`,
        }}
      >
        {
          selected.url_sm
            ? <img src={getImagePath(selected.url_sm)} alt={selected.label} style={{ width: `100%` }} />
            : <IconNoImage />
        }
      </Box>

      <FullImageShow
        open={fullImage}
        item={selected}
        onClose={handleFullImageClose}
      />
    </>
  );
};


export default GoodsImages;
