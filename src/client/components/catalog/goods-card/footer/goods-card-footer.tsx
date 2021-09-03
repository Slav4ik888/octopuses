import * as React from 'react';
// Mui Staff
import Box from '@material-ui/core/Box';
// Components
import GoodsPrice from './goods-price/goods-price';
import GoodsRestInfo from './goods-rest-info/goods-rest-info';
// Functions
import logger from '../../../../utils/client-logger/client-logger';
// Types



type Props = {
  price: number;
  rest: number;
}


// Подвал карточи товара
const GoodsCardFooter: React.FC<Props> = ({ price, rest }) => {


  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
        mt: 1,
      }}
    >
      <GoodsPrice price={price} />
      <GoodsRestInfo rest={rest} />
    </Box>
  );
};


export default GoodsCardFooter;
