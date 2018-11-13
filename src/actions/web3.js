import * as ActionTypes from '../constants/ActionTypes';

export const web3Initialized = payload => {
    return {
        payload,
        type: ActionTypes.WEB3_INITIALIZED
    }
}

export const web3Failed = payload => {
    return {
        payload,
        type: ActionTypes.WEB3_FAILED
    }
}

export const web3Loading = payload => {
    return {
        payload,
        type: ActionTypes.WEB3_PENDING
    }
}

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