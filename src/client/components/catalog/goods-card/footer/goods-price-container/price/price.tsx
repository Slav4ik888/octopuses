import * as React from 'react';
// MUI Stuff
import Typography from '@material-ui/core/Typography';
// Consts
import themes from '../../../../../../utils/themes/themes';

type PriceProps = {
  price: string;
  crossOut?: boolean; // Перечёркнутый
};

const Price: React.FC<PriceProps> = ({ price, crossOut }) => {
  if (!price) return null;
  return (
    <Typography
      sx={{
        fontWeight: 200,
        fontSize: `0.9rem`,
        padding: `2px 8px 2px 0`,
        textDecoration: () => crossOut ? `line-through` : ``,
        color: () => crossOut
          ? themes.catalog.goods_card.prices.crossOut
          : themes.catalog.goods_card.prices.price,
      }}
    >
      {
        price
      }
      &nbsp;₽
    </Typography>
  )
};

export default Price;