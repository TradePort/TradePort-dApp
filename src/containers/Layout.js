import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {
    closeCartMenu,
    closeShopMenu,
    closeSearchMenu,
    openShopMenu,
    openCartMenu,
    openSearchMenu
} from '../actions/navigation.action';

import Home from '../views/Home';
import Authenticate from '../views/Authenticate';
import Explore from '../views/Explore';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import QuickViewTrigger from '../components/QuickViewTrigger';
import CartQuickView from '../components/CartQuickView';
import ExploreQuickView from '../components/ExploreQuickView';
import Search from '../components/Search';
import CategoriesQuickView from '../components/CategoriesQuickView';

const Layout = ({ menu, closeCartMenu, closeSearchMenu, closeShopMenu, openShopMenu, openCartMenu, openSearchMenu }) => (
    <div>
        {/* <Spinner /> */}
        <Navbar />
        <Sidebar menu={menu} openShopMenu={openShopMenu} openSearchMenu={openSearchMenu} closeSearchMenu={closeSearchMenu} openCartMenu={openCartMenu} />
        <Switch>
            <Route exact path={"/"} name="Home" component={Home} />
            <Route exact path={"/explore"} name="Explore" component={Explore} />
            <Route exact path={"/auth"} name="Authenticate" component={Authenticate} />
            <Redirect from="/" to="/" />
        </Switch>
        <Search menu={menu} closeSearchMenu={closeSearchMenu} />
        <QuickViewTrigger />
        <CartQuickView menu={menu} closeCartMenu={closeCartMenu} />
        <ExploreQuickView menu={menu} closeShopMenu={closeShopMenu} />
        <CategoriesQuickView menu={menu} />
    </div>
);

const mapStateToProps = (state) => {
    return { menu: state.menu }
}

export default connect(mapStateToProps, {
    closeCartMenu,
    closeShopMenu,
    closeSearchMenu,
    openShopMenu,
    openCartMenu,
    openSearchMenu
})(Layout);