import * as React from 'react';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Components
import GoodsImages from './goods-images/goods-images';
// Types
import { GoodsImage } from '../../../../../types/catalog';


type Props = {
  images: Array<GoodsImage>;
}


// Тело карточки
const GoodsCardBody: React.FC<Props> = ({ images }) => {

  return (
    <Box>
      <GoodsImages images={images} />
    </Box>
  );
};


export default GoodsCardBody;
