import * as types from '../constants/ActionTypes';

const toggleShopMenu = payload => ({
    type: types.TOGGLE_SHOP_MENU,
    payload
});

const toggleCartMenu = payload => ({
    type: types.TOGGLE_CART_MENU,
    payload
});

const toggleSearchMenu = payload => ({
    type: types.TOGGLE_SEARCH_MENU,
    payload
});

const toggleQuickViewMenu = payload => ({
    type: types.TOGGLE_QUICK_VIEW_MENU,
    payload
});

export const openShopMenu = () => (dispatch) => {
    dispatch(toggleShopMenu(true));
    dispatch(toggleCartMenu(false));
    dispatch(toggleSearchMenu(false));
};

export const closeShopMenu = () => (dispatch) => {
    dispatch(toggleShopMenu(false));
};

export const openCartMenu = () => (dispatch) => {
    dispatch(toggleCartMenu(true));
    dispatch(toggleShopMenu(false));
    dispatch(toggleSearchMenu(false));
};

export const closeCartMenu = () => (dispatch) => {
    dispatch(toggleCartMenu(false));
};

export const openSearchMenu = () => (dispatch) => {
    dispatch(toggleSearchMenu(true));
    dispatch(toggleShopMenu(false));
    dispatch(toggleCartMenu(false));
};

export const closeSearchMenu = () => (dispatch) => {
    dispatch(toggleSearchMenu(false));
}

export const openQuickViewMenu = () => (dispatch) => {
    dispatch(toggleQuickViewMenu(true));
}

export const closeQuickViewMenu = () => (dispatch) => {
    dispatch(toggleQuickViewMenu(false));
}
