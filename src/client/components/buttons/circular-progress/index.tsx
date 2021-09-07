import * as React from 'react';
// MUI Stuff
import Circular from '@material-ui/core/CircularProgress';
// Functions
import { extend } from '../../../../utils/objects/objects/objects';
import themes from '../../../utils/themes/themes';


type Props = {
  loading: boolean;
  size?: number;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  classname?: object;
}


const CircularProgress: React.FC<Props> = ({ loading, size = 30, top, bottom, right, left, classname }) => {
  if (!loading) return null;
  
  const styles = extend({
    position: `absolute`,
    color: themes.palette.secondary.main,
    top: () => top ? top : `0px`,
    bottom: () => bottom ? bottom : `0px`,
    left: () => left ? left : `0px`,
    right: () => right ? right : `0px`,
  }, classname);
  
  return (<>
    <Circular
      size={size}
      sx={styles}
    />
  </>);
}

export default CircularProgress;