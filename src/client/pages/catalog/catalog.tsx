import * as React from 'react';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Components
import CatalogList from '../../components/catalog/catalog-list/catalog-list';
// Types
import themes from '../../utils/themes/themes';

type Props = {
  
}

// Страница для каталога товаров
const Catalog: React.FC<Props> = ({  }) => {


  return (
    <Box
      sx={{
        display: `flex`,
        m: `auto`,
        p: { xs: 0, sm: 2 },
        width: `100%`,
        maxWidth: `1200px`,
        // backgroundColor: themes.main.background,
        background: `radial-gradient(#3c83af, #0d5b89 60%)`
      }}
    >
      <CatalogList />
    </Box>
  );
};


export default Catalog;
