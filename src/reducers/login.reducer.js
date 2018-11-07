const USER_LOADING = 'USER_LOADING';
const USER_FULLFILLED = 'USER_FULLFILLED';
const USER_ERROR = 'USER_ERROR';

const loginReducer = (state = {
    error: null,
    loading: false,
    user: []
}, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                error: null,
                loading: true,
                user: []
            };
        case USER_FULLFILLED:
            return {
                ...state,
                error: null,
                loading: false,
                user: action.payload
            };
        case USER_ERROR:
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