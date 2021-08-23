import * as React from 'react';
// MUI Stuff
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// Icons
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// Component
import { ListSelectType } from '../../../../types/btn';
// Types
import { NewUserStatusType, Locations } from '../../../../types/user';


type Props = {
  type: ListSelectType;
  label?: string;         // Заголовок для списка
  valueField: string;     // Полее по которому в items будет искаться элемент списка
  placeholder?: string;
  items: Array<any>;      // <SubscribeArrayType | UserStatusArrayType | Payer>;
  itemTextAdd?: string;   // Текст для замены "добавить новый"
  disabled?: boolean;
  fullWidth?: boolean;
  displayEmpty?: boolean; // Показывать текст не выбранного элемента
  formVariant?: "filled" | "outlined" | "standard"; // variant для формы "outlined"
  onSelected: (newStatus: Locations | NewUserStatusType | `SELECT`, item?: any) => void;
  onItemAdd?: () => void; // Ф-я для добавления нового элемента
};


const ListSelect: React.FC<Props> = ({ type, items, valueField, label, placeholder, displayEmpty,
  itemTextAdd, disabled, fullWidth, formVariant, onSelected, onItemAdd }) => {

  
  const icon = type === ListSelectType.USERS
    ? <PersonAddIcon sx={{ mr: 2 }} />
    : <AddIcon sx={{ mr: 2 }} />;

  
  const [valueSelected, setValueSelected] = React.useState(placeholder);

  const handleChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (value === `newItemAdd`) return null; // Нажали добавить новый элемент

    let item = items.find(item => item[valueField] === value);
    
    if (item) setValueSelected(item[valueField]);
    else setValueSelected(``);

    onSelected(item);
  };

  return (
    <FormControl
      variant={formVariant || "standard"}
      sx={{
        display: 'flex',
        minWidth: 220,
        pb: `10px`,
      }}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {
        label && <InputLabel>{label}</InputLabel>
      }

      <Select
        fullWidth={fullWidth}
        value={valueSelected}
        onChange={handleChange}
        displayEmpty={displayEmpty}
        input={<Input />}
      >
        <MenuItem value={`Не выбран`}><em>Не выбран</em></MenuItem>
        {
          items && items.map((item, i) => <MenuItem key={item[valueField] + i} value={item[valueField]}>
              {item[valueField]}
            </MenuItem>
          )
        }
        {
          onItemAdd && <MenuItem
            value={`newItemAdd`}
            onClick={onItemAdd}
            sx={{
              color: `primary.dark`,
              fontStyle: `italic`,
            }}
          >
            {icon}
            {itemTextAdd ? itemTextAdd : `добавить новый`}
          </MenuItem>
        }
      </Select>
    </FormControl>
  )
};

export default ListSelect;
