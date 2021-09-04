import * as React from 'react';
// Mui Staff
import Box from '@mui/material/Box';
// Components
import GoodsPrice from './goods-price-container/goods-price-container';
import GoodsRestInfo from './goods-rest-info/goods-rest-info';
// Types
import { Goods } from '../../../../../types/catalog';


type Props = {
  goods: Goods;
}

// Подвал карточи товара
const GoodsCardFooter: React.FC<Props> = ({ goods }) => {
  return (
    <Box sx={{ display: `flex`, justifyContent: `space-between`, mt: 1 }} >
      <GoodsPrice goods={goods} />
      <GoodsRestInfo rest={goods.rest} />
    </Box>
  );
};


export default GoodsCardFooter;
