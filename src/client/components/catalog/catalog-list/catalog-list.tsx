import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
// import { updateOneTask} from '../../redux/actions/data-actions';
// import { getUserId } from '../../../redux/selectors/user-selectors';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Components
import GoodsCard from '../goods-card/goods-card';
// Functions
// Types
// Consts
import catalog from '../../../../consts/catalog';
console.log('catalog: ', catalog);


type Props = {
  
}


// Страница для каталога товаров
const CatalogList: React.FC<Props> = ({  }) => {


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
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(CatalogList);
