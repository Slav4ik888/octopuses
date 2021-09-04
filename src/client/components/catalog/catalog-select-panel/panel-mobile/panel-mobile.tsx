import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setSelectedGoodsType} from '../../../../redux/actions/ui-actions';
import { getScreenFormats, getSelectedGoodsType } from '../../../../redux/selectors/ui-selectors';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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


// Mobile навигационная панель Каталога
const PanelMobile: React.FC<Props> = ({ screenFormats, selectedGoodsType, setSelectedGoodsType }) => {
  if (!screenFormats.isMobile) return null;

  const [active, setActive] = React.useState(selectedGoodsType);

  const handleChange = (event: SelectChangeEvent) => {
    const selected = event.target.value;
    if (active !== selected) setSelectedGoodsType(selected);
    setActive(selected);
  };


  return (
    <Box sx={{ minWidth: 200, m: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Фильтр</InputLabel>
        <Select
          value={active}
          label={`Фильтр`}
          onChange={handleChange}
        >
          {
            arrGoodsType.map((label) => <MenuItem key={label}
              value={label}
              children={label}
            />)
          }
        </Select>
      </FormControl>
      
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

export default connect(mapStateToProps, mapActionsToProps)(PanelMobile);
