import * as React from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import { clearMessage } from '../../../redux/actions/ui-actions';
// MUI Stuff
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/core/Alert';
// Types
import { Message, MessageType } from '../../../../types/messages';


type Props = {
  message: Message;
  clearMessage: () => void;
}

const MessageBar: React.FC<Props> = ({ message, clearMessage }) => {
  if (!message.message) return null;

  const [isSnack, setIsSnack] = React.useState(false);
  const [color, setColor] = React.useState(``);
  const [backgroundColor, setBackground] = React.useState(``);
  

  React.useEffect(() => {
    if (message.message) {
      setIsSnack(true);

      switch (message.type) {
        case MessageType.INFO:
          // setColor(`#146900`);
          setBackground(`#edf9ff`);
          break;
          
        case MessageType.SUCCESS:
          setColor(`#146900`);
          setBackground(`#eaf7e7`);
          break;
          
        case MessageType.WARNING:
          setColor(`#863800`);
          setBackground(`#ffedde`);
          break;
        
        case MessageType.ERROR:
          setColor(`#8e0000`);
          setBackground(`#fdebeb`);
          break;
      }
    }
  }, [message]);

  const handleCloseMessageBar = () => {
    clearMessage();
    setIsSnack(false);
  };
  

  return (
    <Snackbar
      open={isSnack}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={message.timeout || 50000}
      onClose={handleCloseMessageBar}
    >
      <Alert
        onClose={handleCloseMessageBar}
        variant="outlined" // filled
        severity={message.type}
        sx={{
          '& .MuiAlert-icon': { mr: { xs: 3, sm: 4 } },
          fontSize: { xs: `0.9rem`, sm: `1rem` },
          lineHeight: { xs: 1.5, sm: 1.7 },
          padding: { xs: `8px 16px`, sm: `16px 24px` },
          color,
          backgroundColor,
          alignItems: `center`,
          zIndex: 2000,

          '& .MuiAlert-action': {pt: 0},
        }}
      >
        {message.message}
      </Alert>
    </Snackbar>
  );
}

const mapStateToProps = (state) => ({
  message: state.UI.message,
});

const mapActionsToProps = {
  clearMessage,
};

export default connect(mapStateToProps, mapActionsToProps)(MessageBar);
