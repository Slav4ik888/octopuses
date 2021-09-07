import * as React from 'react';
// MUI Stuff
import Button from '@material-ui/core/Button';
import CircularProgress from '../circular-progress';


type Props = {
  onCancel: () => void;
  onSubmit: (e: any) => void;
  submitText?: string;
  disabled?: boolean;
  loading?: boolean;
};


const CancelSubmitBtn: React.FC<Props> = ({ onCancel, onSubmit, submitText, disabled, loading }) => {

  return (
    <>
      <Button onClick={onCancel} sx={{ mr: 2 }}>
        Отмена
      </Button>
      <Button onClick={onSubmit} disabled={disabled || loading} variant="contained" color="primary">
        {
          submitText ? submitText : `Сохранить`
        }
        
        <CircularProgress size={30} loading={loading} />
        
      </Button>
    </>
  )
};


export default CancelSubmitBtn;
