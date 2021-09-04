import * as React from 'react';
// MUI Stuff
import Paper from '@material-ui/core/Paper';
// Components
import GoodsCardHeader from './header/goods-card-header';
import GoodsCardBody from './body/goods-card-body';
import GoodsCardFooter from './footer/goods-card-footer';
// Functions
import logger from '../../../utils/client-logger/client-logger';
// Types
import { Goods } from '../../../../types/catalog';

const log = logger(`Goods`);


type Props = {
  goods: Goods;
}


// Страница для каталога товаров
const GoodsCard: React.FC<Props> = ({ goods }) => {
  // log(`Goods: `, goods);

  return (
    <Paper
      sx={{
        display: `flex`,
        flexDirection: `column`,
        width: `100%`,
        minWidth: `200px`,
        maxWidth: `250px`,
        m: { xs: 0, sm: 1 },
        mt: { xs: 1, sm: 1 },
        p: { xs: 1, sm: 2 },
        backgroundColor: `white`,
      }}
    >
      <GoodsCardHeader label={goods.label} />

      <GoodsCardBody goods={goods} />

      <GoodsCardFooter goods={goods} />
    </Paper>
  );
};

export default GoodsCard;
