import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setSelectedGoodsType} from '../../../../redux/actions/ui-actions';
import { getScreenFormats, getSelectedGoodsType } from '../../../../redux/selectors/ui-selectors';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import PanelItem from './panel-item/panel-item';
// Functions
import { arrFromObj } from '../../../../../utils/objects/objects/objects';
// Types & Consts
import { ScreenFormats } from '../../../../../types/types';
import { GoodsType } from '../../../../../types/catalog';


const arrGoodsType: Array<string> = arrFromObj(GoodsType);


type Props = {
  screenFormats: ScreenFormats;
  selectedGoodsType: string;
  setSelectedGoodsType: (label: string) => void;
};


// Any format навигационная панель Каталога
const PanelAnyFormat: React.FC<Props> = ({ screenFormats, selectedGoodsType, setSelectedGoodsType }) => {
  if (screenFormats.isMobile) return null;

  const [active, setActive] = React.useState(selectedGoodsType);

  const handleClick = (label: string) => {
    if (active !== label) setSelectedGoodsType(label);
    setActive(label);
  };


  return (
    <Box sx={{
      display: `flex`,
      justifyContent: `space-around`,
      mt: 2, mb: 3,
    }}>
      {
        arrGoodsType.map((label) => <PanelItem key={label}
          label={label}
          active={active === label}
          onClick={handleClick}
        />)
      }
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  screenFormats: getScreenFormats(state),
  selectedGoodsType: getSelectedGoodsType(state),
});

const mapActionsToProps = {
  setSelectedGoodsType,
};

export default connect(mapStateToProps, mapActionsToProps)(PanelAnyFormat);
