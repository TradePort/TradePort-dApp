import * as ActionTypes from '../constants/ActionTypes';
export const openSignInModal = payload => {
    return {
        payload,
        type: ActionTypes.OPEN_SIGNIN_MODAL
    }
}

export const closeSignInModal = payload => {
    return {
        payload,
        type: ActionTypes.OPEN_SIGNIN_MODAL
    }
}