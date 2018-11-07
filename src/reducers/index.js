import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import loginReducer from './login.reducer';

export default combineReducers({
    route: routerReducer,
    login: loginReducer
});