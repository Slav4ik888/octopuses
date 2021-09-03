import * as React from 'react';
// Components
import PageWrap from '../page-wrap/page-wrap';
import CatalogList from '../../components/catalog/catalog-list/catalog-list';
// Types
import themes from '../../utils/themes/themes';

type Props = {
  
}

// Страница для каталога товаров
const Catalog: React.FC<Props> = ({  }) => {


  return (
    <PageWrap>
      <CatalogList />
    </PageWrap>
  );
};


export default Catalog;
