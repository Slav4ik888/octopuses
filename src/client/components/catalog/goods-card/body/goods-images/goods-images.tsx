import * as React from 'react';
// MUI Stuff
import Box from '@material-ui/core/Box';
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
        }}
      >
        <img src={getImagePath(selected.url_sm)} alt={selected.label} style={{ width: `100%` }} />
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
