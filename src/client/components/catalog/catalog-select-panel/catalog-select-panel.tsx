import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import PanelAnyFormat from './panel-any-format/panel-any-format';
import PanelMobile from './panel-mobile/panel-mobile';


// Навигационная панель Каталога
const CatalogSelectPanel: React.FC = () => {

  return (
    <Box>
      <PanelMobile />
      <PanelAnyFormat />
    </Box>
  );
};


export default CatalogSelectPanel;
