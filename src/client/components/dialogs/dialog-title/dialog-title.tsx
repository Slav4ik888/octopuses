import * as React from 'react';
// MUI Stuff
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// Icons
import CloseIcon from '@material-ui/icons/Close';
import HelpOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HelpIcon from '@material-ui/icons/Help';
// Consts
import themes from '../../../utils/themes/themes';


const titleStyle = {
  textAlign: `center`,
  width: `100%`,
  color: themes.dialog.title.color,
  marginLeft: 2,
  paddingLeft: 4,
};

const closeButtonStyle = {
  marginRight: 1,
  color: themes.dialog.title.color,
};

const questionButtonStyle = {
  color: themes.dialog.title.color,
};

const questionIconStyle = {
  width: `24px`,
};


enum QuestionIconType {
  HelpOutlined = `HelpOutlined`,
  Help = `Help`,
}


type Props = {
  children?: string;
  question?: string;
  questionIconType?: QuestionIconType;
  onClose: () => void;
}


const DialogTitle: React.FC<Props> = (props: Props) => {
  const { children, question, questionIconType, onClose, ...other } = props;

  let helpIcon: JSX.Element;
  switch (questionIconType) {
    case QuestionIconType.Help: helpIcon = <HelpIcon />; break;
    case QuestionIconType.HelpOutlined: helpIcon = <HelpOutlinedIcon />; break;
    default: helpIcon = <HelpIcon />;
  }


  return (
    <MuiDialogTitle
      sx={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        m: 0,
        pl: { xs: 1, sm: 4 },
        pr: { xs: 1, sm: 2 },
        color: `primary.contrastText`, // theme.palette.primary.contrastText
        backgroundColor: `primary.main`,// theme.palette.primary.main,
        minHeight: `62px`,
      }}
      {...other}
    >
      <Typography variant="h6" classes={titleStyle} component="div">
        {
          children
        }
      </Typography>
      {
        question ? (
          <Tooltip title={question} placement="bottom" arrow>
            <IconButton aria-label="question" sx={questionButtonStyle}>
              {
                helpIcon
              }
            </IconButton>
          </Tooltip>
        ) : null
      }
      {
        onClose ? (
          <IconButton aria-label="close" sx={closeButtonStyle} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null
      }
    </MuiDialogTitle>
  );
};

export default DialogTitle;
