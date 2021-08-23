import * as React from 'react';
// MUI Stuff
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
// Components
import DialogTitle from '../dialog-title/dialog-title';


type Props = {
  open: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  title: string;
  question?: string;
  classname?: string;
  children: JSX.Element | any;
  onClose: () => void;
}


// Всплывающее окно с каким-то children
const DialogInfo: React.FC<Props> = ({ open, maxWidth = "md", fullWidth = true, title, classname, children, question, onClose }) => {
  if (!open || !children) return null;

  const theme = useTheme();
  const greaterSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          xs: {
            margin: `0px`,
            width: `100%`,
          }
        }
      }}
      maxWidth={maxWidth}
      fullWidth={greaterSmScreen && fullWidth}
    >
      <DialogTitle onClose={onClose} children={title} question={question}/>

      <DialogContent
        sx={{ p: { xs: 1, sm: 3 } }}
        className={classname}
      >
        {
          children
        }
      </DialogContent>

    </Dialog>
  );
};

export default DialogInfo;
