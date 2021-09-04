import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Types
import themes from '../../../../../utils/themes/themes';


type Props = {
  rest: number;
};

// Заголовок товара
const GoodsRestInfo: React.FC<Props> = ({ rest }) => {

  const title = React.useMemo(() => rest > 0 ? `В наличии` : `Под заказ`, [rest]);
  const color = React.useMemo(() => rest > 0 ? themes.catalog.goods_card.rest_label.available : themes.catalog.goods_card.rest_label.not_available, [rest]);

  return (
    <Box sx={{ display: `flex`, justifyContent: `flex-end`, alignItems: `center` }} >
      <Typography
        sx={{
          color,
          backgroundColor: themes.catalog.goods_card.rest_label.background,
          fontWeight: 200,
          fontSize: `0.7rem`,
          borderRadius: `4px`,
          textAlign: `center`,
          padding: `2px 8px`,
        }}
      >
        {
          title
        }
      </Typography>
    </Box>
  );
};


export default GoodsRestInfo;
