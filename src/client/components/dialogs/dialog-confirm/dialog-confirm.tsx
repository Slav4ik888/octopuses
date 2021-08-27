import * as React from 'react';
// MUI Stuff
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
// Components
import DialogInfo from '../dialog-info/dialog-info';
// Types
import { ConfirmType } from '../../../../types/btn';


  // dialog: {
  //   padding: theme.spacing(4),
    
  //   [theme.breakpoints.down(`xs`)]: {
  //     '& .MuiPaper-root': {
  //       margin: 0
  //     },
  //     padding: 0
  //   }
  // },



type Props = {
  typeOk: ConfirmType;
  open: boolean;
  title: string;
  onOk: () => void;
  onClose: () => void;
};


const DialogConfirm = ({ open, typeOk, title, onOk, onClose }) => {
  
  return (
    <>
      <DialogInfo
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="xs"
        // className={classes.dialog}
        title={`Профиль пользователя`}
      >
        <DialogTitle sx={{ p: { xs: 2, sm: 4 } }}>
          {title}
        </DialogTitle>

        <DialogActions sx={{ p: { xs: 2, sm: 4 } }}>
          {
            typeOk !== ConfirmType.NO_QUESTIONS ?
              <Button variant="contained" color="secondary" onClick={onClose} sx={{ mr: 2 }}>
                Отменить
              </Button>
              : null
          }
          <Button variant="outlined" onClick={onOk}>
            {
              typeOk
            }
          </Button>
        </DialogActions>
      </DialogInfo>
    </>
  )
};

export default DialogConfirm;
