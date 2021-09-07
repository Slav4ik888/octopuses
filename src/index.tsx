import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "regenerator-runtime/runtime";
// Redux
import { Provider } from 'react-redux';
import store from './client/redux/store.js';
// MUI Stuff
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import themeFile from './client/utils/themes/theme';
// Components
import App from './client/app';


const theme = createTheme(themeFile);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'));
 
  
// git add . && git commit -m "fix2 webpack.config" && git push -u origin master