import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import BusinessReducer from './business';
import BusinessoReducer from './0business';
import ReviewReducer from './0review';
// import ReviewReducer from './reviews';

import userSession from './session'

const rootReducer = combineReducers({
  session: userSession,
  // businesses: BusinessReducer,
  business: BusinessoReducer,
  review: ReviewReducer,
  // reviews: ReviewReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
