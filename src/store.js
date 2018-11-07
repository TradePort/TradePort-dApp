import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

// Middlewares 
const middlewares = [thunk, historyMiddleware];

// Redux Logger
// if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
// }

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
)

const store = createStore(reducers, enhancer);

export default store;