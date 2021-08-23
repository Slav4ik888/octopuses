import * as React from 'react';
// MUI Stuff
import Circular from '@material-ui/core/CircularProgress';
// Functions
import { extend } from '../../../../utils/objects/objects/objects';


type Props = {
  loading: boolean;
  size?: number;
  classname?: object;
}


const CircularProgress: React.FC<Props> = ({ loading, size = 30, classname }) => {
  if (!loading) return null;
  
  const styles = extend({ position: `absolute`, color: `#147070` }, classname);
  
  return (<>
    <Circular
      size={size}
      sx={styles}
    />
  </>);
}

export default CircularProgress;