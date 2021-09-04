import * as React from 'react';
// MUI Stuff
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
// Icons
import VerifiedOutlinedIcon from '@material-ui/icons/VerifiedOutlined';
import IconDiscount from '../../../../../icons/star_discount.svg';
// Components
import Price from './price/price';
// Functions
import logger from '../../../../../utils/client-logger/client-logger';
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
    <Box
      sx={{
        display: `flex`,
      }}
    >
      <Price
        price={price}
        crossOut={Boolean(newPrice)}
      />

      <Price price={newPrice} />
    </Box>
  );
};


export default GoodsPriceContainer;
