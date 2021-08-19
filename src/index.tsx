import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "regenerator-runtime/runtime";
// import dotenv from './server/utils/dotenv/index.js'; // Чтобы читать process.env
// Redux
import { Provider } from 'react-redux';
import store from './client/redux/store.js';
// MUI Stuff
// import { ThemeProvider } from '@material-ui/core/styles';
// import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './client/utils/themes/theme';
// Components
import App from './client/app';


// const theme = createMuiTheme(themeFile);

ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
  </Provider>
  , document.getElementById('root'));


// git add . && git commit -m "start server" && git push -u origin master