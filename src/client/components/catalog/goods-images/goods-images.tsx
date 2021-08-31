import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
// import { updateOneTask} from '../../redux/actions/data-actions';
import { getUserId } from '../../../redux/selectors/user-selectors';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
// Components
import FullImageShow from '../full-image-show/full-image-show';
// Functions
import logger from '../../../utils/client-logger/client-logger';
// Types
import { GoodsImage } from '../../../../types/catalog';
import themes from '../../../utils/themes/themes';

const log = logger(`[GoodsImages]`);


type Props = {
  images: Array<GoodsImage>;
}


// Страница для каталога товаров
const GoodsImages: React.FC<Props> = ({ images }) => {
  log(`images: `, images);

  const [selected, setSelected] = React.useState(images[0]);

  const [fullImage, setFullImage] = React.useState(false);
  const handleFullImageOpen = () => setFullImage(true);
  const handleFullImageClose = () => setFullImage(false);


  return (
    <>
      <Box
        onClick={handleFullImageOpen}
        sx={{
          cursor: `pointer`,
        }}
      >
        <img src={selected.url_sm} alt={selected.label} style={{ width: `100%` }} />
      </Box>

      <FullImageShow
        open={fullImage}
        item={selected}
        onClose={handleFullImageClose}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(GoodsImages);
