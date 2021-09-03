import * as React from 'react';
// MUI Stuff
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
// Components
// Functions
import logger from '../../../../../utils/client-logger/client-logger';
// Types

const log = logger(`[GoodsLabel]`);


type Props = {
  label: string;
}


// Заголовок товара
const GoodsLabel: React.FC<Props> = ({ label }) => {

  return (
    <Tooltip title={label} placement="top" arrow enterDelay={200} enterNextDelay={1000}>
      <Typography
        sx={{
          width: `100%`,
          height: `23px`,
          whiteSpace: `nowrap`,
          overflowX: `hidden`,
          textOverflow: `ellipsis`,
          mb: 1,
        }}
      >
        {
          label
        }
      </Typography>
    </Tooltip>
  );
};


export default GoodsLabel;
