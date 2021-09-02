import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getCatalog as getCatalogFromStore } from '../../../redux/selectors/data-selectors';
// import { getUserId } from '../../../redux/selectors/user-selectors';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Components
import GoodsCard from '../goods-card/goods-card';
// Types
import { Goods } from '../../../../types/catalog';


type Props = {
  catalog: Array<Goods>,
};


// Страница для каталога товаров
const CatalogList: React.FC<Props> = ({ catalog }) => {
  console.log('catalog: ', catalog);

  if (!catalog.length) return null;


  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `space-evenly`,
        flexWrap: `wrap`,
      }}
    >
      {
        catalog.map(goods => <GoodsCard key={goods.id} goods={goods} />)
      }
    </Box>
  );
};

const mapStateToProps = (state: State) => ({
  catalog: getCatalogFromStore(state),
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(CatalogList);
