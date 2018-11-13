import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import loginReducer from './login';
import navigationReducer from './navigation';
import web3Reducer from './web3';

export default combineReducers({
    route: routerReducer,
    login: loginReducer,
    menu: navigationReducer,
    web3: web3Reducer
});