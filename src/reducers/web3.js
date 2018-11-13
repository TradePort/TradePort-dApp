import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    account: null,
    error: null,
    loading: false
}

const web3Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.WEB3_PENDING:
            return {
                ...state,
                error: null,
                loading: true,
                account: null
            }
        case ActionTypes.WEB3_INITIALIZED:
            return {
                ...state,
                error: null,
                loading: false,
                account: action.payload
            }
        case ActionTypes.WEB3_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false,
                account: null
            }
        default:
            return state;
    }
}

export default web3Reducer;