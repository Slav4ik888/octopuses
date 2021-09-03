import * as React from 'react';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Components
import GoodsLabel from './goods-label/goods-label';
// Functions
// Types

type Props = {
  label: string;
}

// Заголовок карточки
const GoodsCardHeader: React.FC<Props> = ({ label }) => {

  return (
    <Box>
      <GoodsLabel label={label} />
    </Box>
  );
};


export default GoodsCardHeader;
