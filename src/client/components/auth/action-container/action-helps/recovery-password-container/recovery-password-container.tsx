import * as React from 'react';
// MUI Stuff
import Typography from '@material-ui/core/Typography';
// Components
import RecoveryPassword from './recovery-password/recovery-password';



// Восстановление пароля (главный контейнер)
const RecoveryPasswordContainer: React.FC = () => {

  // Recovery password
  const [open, setOpen] = React.useState(false);
  const handleOpenРasswordRecovery = () => setOpen(true);
  const handleOpenPassClose = () => setOpen(false);

  return (
    <>
      <Typography
        onClick={handleOpenРasswordRecovery}
        variant="body2"
        sx={{ cursor: `pointer`, textAlign: `center` }}
      >
        Восстановить пароль
      </Typography>

      <RecoveryPassword open={open} onClose={handleOpenPassClose} />
    </>
  );
};


export default RecoveryPasswordContainer;
