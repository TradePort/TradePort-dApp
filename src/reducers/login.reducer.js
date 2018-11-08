import * as actionTypes from '../constants/ActionTypes';

const loginReducer = (state = {
    error: null,
    loading: false,
    user: []
}, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_LOADING:
            return {
                ...state,
                error: null,
                loading: true,
                user: []
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                user: action.payload
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
                user: []
            }
        default:
            return state;
    }
}


export default loginReducer;