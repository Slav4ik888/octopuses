import * as React from 'react';
// MUI Stuff
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
// Components
// Functions
import logger from '../../../../../utils/client-logger/client-logger';
// Types
import themes from '../../../../../utils/themes/themes';
import { Box } from '@material-ui/core';


type Props = {
  price: number;
}


// Цена товара
const GoodsPrice: React.FC<Props> = ({ price }) => {

  return (
    <Box
      sx={{
        display: `flex`,
      }}
    >
      <Typography
        sx={{
          fontWeight: 200,
          fontSize: `0.9rem`,
          padding: `2px 8px`,
        }}
      >
        {
          price
        }
        ₽
      </Typography>
    </Box>
  );
};


export default GoodsPrice;
