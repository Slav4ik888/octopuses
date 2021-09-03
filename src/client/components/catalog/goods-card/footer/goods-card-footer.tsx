import * as React from 'react';
// Mui Staff
import Box from '@material-ui/core/Box';
// Components
import GoodsRestInfo from './goods-rest-info/goods-rest-info';
// Functions
import logger from '../../../../utils/client-logger/client-logger';
// Types



type Props = {
  rest: number;
}


// Подвал карточи товара
const GoodsCardFooter: React.FC<Props> = ({ rest }) => {


  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <GoodsPrice />
      <GoodsRestInfo rest={rest} />
    </Box>
  );
};


export default GoodsCardFooter;
