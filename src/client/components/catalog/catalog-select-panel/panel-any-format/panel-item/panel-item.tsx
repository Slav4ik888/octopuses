import * as React from 'react';
// MUI Stuff
import Button from '@mui/material/Button';


type Props = {
  label: string;       // Пункт меню
  active: boolean;     // Выбранный пункт
  onClick: (label: string) => void; // При нажании
}

// Пункт пенели в Каталоге
const PanelItem: React.FC<Props> = ({ label, active, onClick }) => {
          
  const handleClick = () => onClick(label);

  return (
    <Button
      sx={{
        minWidth: 120,
        m: 1,
      }}
      variant={active ? `contained` : `outlined`}
      onClick={handleClick}
    >
      {
        label
      }
    </Button>
  );
};


export default PanelItem;
