import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
// Components
import GoodsImages from './goods-images/goods-images';
// Types
import { Goods } from '../../../../../types/catalog';
import themes from '../../../../utils/themes/themes';


type Props = {
  goods: Goods;
}


// Тело карточки
const GoodsCardBody: React.FC<Props> = ({ goods }) => {
  const discountLabel = React.useMemo(() => goods.discount ? `Скидка ${goods.discount}%` : null, [goods]);

  return (
    <Box>
      <Badge
        badgeContent={discountLabel}
        sx={{
          '& .MuiBadge-badge': {
            color: themes.catalog.goods_card.discount.badges.color,
            backgroundColor: themes.catalog.goods_card.discount.badges.background,
            height: `19px`,
            minWidth: `max-content`,
            fontSize: `0.6rem`,
            right: `23px`,
          }
        }}
      >
        <GoodsImages images={goods.images} />
      </Badge>
    </Box>
  );
};


export default GoodsCardBody;
