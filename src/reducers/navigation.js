import * as types from '../constants/ActionTypes';

const initialState = {
    isShopOpen: false,
    isCartOpen: false,
    isSearchOpen: false,
    isQuickViewOpen: false
}

const navigationReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.TOGGLE_SHOP_MENU:
            return {
                ...state,
                isShopOpen: action.payload
            }
        case types.TOGGLE_CART_MENU:
            return {
                ...state,
                isCartOpen: action.payload
            }
        case types.TOGGLE_SEARCH_MENU:
            return {
                ...state,
                isSearchOpen: action.payload
            }
        case types.TOGGLE_QUICK_VIEW_MENU:
            return {
                ...state,
                isQuickViewOpen: action.payload
            }
        default:
            return state;
    }
}

export default navigationReducer;