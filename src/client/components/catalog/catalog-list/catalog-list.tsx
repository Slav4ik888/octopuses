import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getCatalog as getCatalogFromStore } from '../../../redux/selectors/data-selectors';
import { getLoadingUI, getSelectedGoodsType } from '../../../redux/selectors/ui-selectors';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import CircularProgress from '../../buttons/circular-progress';
import GoodsCard from '../goods-card/goods-card';
// Types
import { Goods, GoodsType } from '../../../../types/catalog';


type Props = {
  loadingUI: boolean;
  catalog: Array<Goods>;
  selectedGoodsType: string;
};

// Страница для каталога товаров
const CatalogList: React.FC<Props> = ({ loadingUI, catalog, selectedGoodsType }) => {
  if (loadingUI) return <CircularProgress loading={loadingUI} size={50} top={`30%`} left={`calc(50% - 25px)`} />;
  if (!catalog.length) return null;

  const filtredCatalog = React.useMemo(() => {
    if (selectedGoodsType !== GoodsType.ALL) return catalog.filter(item => item.types === selectedGoodsType);
    else return catalog;
  }, [catalog, selectedGoodsType]);
  

  return (
    <Box sx={{ display: `flex`, justifyContent: `space-evenly`, flexWrap: `wrap` }} >
      {
        filtredCatalog.map(goods => <GoodsCard key={goods.id} goods={goods} />)
      }
    </Box>
  );
};

const mapStateToProps = (state: State) => ({
  loadingUI: getLoadingUI(state),
  catalog: getCatalogFromStore(state),
  selectedGoodsType: getSelectedGoodsType(state),
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(CatalogList);
