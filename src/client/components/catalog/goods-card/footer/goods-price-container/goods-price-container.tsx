import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Price from './price/price';
// Functions
import addSpaceBetweenNumber from '../../../../../../utils/numbers/add-space-between-number'
// Types
import { Goods } from '../../../../../../types/catalog';



type Props = {
  goods: Goods;
}


// Цена товара
const GoodsPriceContainer: React.FC<Props> = ({ goods }) => {
  const price = React.useMemo(() => addSpaceBetweenNumber(goods.price), [goods]);
  const newPrice = React.useMemo(() => {
    const newPrice = goods.price - (goods.price / 100 * goods.discount);
    return goods.discount ? addSpaceBetweenNumber(newPrice) : null;
  }, [goods]);


  return (
    <Box sx={{ display: `flex` }} >
      <Price price={price} crossOut={Boolean(newPrice)} />
      <Price price={newPrice} />
    </Box>
  );
};


export default GoodsPriceContainer;
