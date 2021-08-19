import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import userReducer from './reducers/user-reducer/user-reducer.js';
import dataReducer from './reducers/data-reducer/data-reducer.js';
import uiReducer from './reducers/ui-reducer/ui-reducer.js';

const logger = createLogger({
  collapsed: true,
});

const initialState = {};

const middleware = process.env.NODE_ENV === `development`
  ? [thunk, logger] : [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer,
});

const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
