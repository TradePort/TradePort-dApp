import React from 'react';
import { connect } from 'react-redux';
import {
    closeCartMenu,
    closeShopMenu,
    closeSearchMenu,
    openQuickViewMenu
} from '../actions/navigation.action';
import Search from '../components/Search';
import CartQuickView from '../components/CartQuickView';
import ExploreQuickView from '../components/ExploreQuickView';

const Explore = ({menu, closeCartMenu, closeShopMenu}) => (
    <div class="shop-wrapper has-background-image">

        <Search />
        <CartQuickView menu={menu} closeCartMenu={closeCartMenu} />
        <ExploreQuickView menu={menu} closeShopMenu={closeShopMenu} />
    </div>
);

const mapStateToProps = (state) => {
    return { menu: state.menu }
}

export default connect(mapStateToProps, {
    closeCartMenu,
    closeShopMenu,
    closeSearchMenu,
    openQuickViewMenu
})(Explore);