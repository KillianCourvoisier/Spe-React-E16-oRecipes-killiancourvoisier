import { createStore, applyMiddleware, compose } from 'redux';

// import socketMiddleware from 'src/middlewares/socketMiddleware';

import reducer from './reducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
  ),
);

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  enhancers,
);

export default store;
