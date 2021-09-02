import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
// import { updateOneTask} from '../../redux/actions/data-actions';
import { getUserId } from '../../../redux/selectors/user-selectors';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Paper from '@material-ui/core/Paper';
// Components
import GoodsLabel from '../goods-label/goods-label';
import GoodsImages from '../goods-images/goods-images';
import GoodsRestInfo from '../goods-rest-info/goods-rest-info';
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
  log(`Goods: `, goods);

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
      <GoodsLabel label={goods.label} />
      <GoodsImages images={goods.images} />
      <GoodsRestInfo rest={goods.rest} />
    </Paper>
  );
};

const mapStateToProps = (state: State) => ({
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(GoodsCard);
