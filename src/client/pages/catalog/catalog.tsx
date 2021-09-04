import * as React from 'react';
// Components
import PageWrap from '../page-wrap/page-wrap';
import CatalogSelectPanel from '../../components/catalog/catalog-select-panel/catalog-select-panel';
import CatalogList from '../../components/catalog/catalog-list/catalog-list';


// Страница для каталога товаров
const Catalog: React.FC = () => (
  <PageWrap column>
    <CatalogSelectPanel />
    <CatalogList />
  </PageWrap>
);

export default Catalog;
