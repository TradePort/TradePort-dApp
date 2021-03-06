import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import {
  closeCartMenu,
  closeShopMenu,
  closeSearchMenu,
  openShopMenu,
  openCartMenu,
  openSearchMenu
} from "../actions/navigation";

import Home from "../views/Home";
import Authenticate from "../views/Authenticate";
import Explore from "../views/Explore";
import Profile from "../views/User/Profile";
import UserSettings from "../views/User/Settings";
import Products from "../views/Product/Products";
import Product from "../views/Product/Product";
import Categories from "../views/Category";

import Navbar from "../custom-components/NavigationMenu/Navbar";
import Sidebar from "../custom-components/NavigationMenu/Sidebar";
import QuickViewTrigger from "../custom-components/Overlay/QuickViewTrigger";
import CartQuickView from "../custom-components/Overlay/CartQuickView";
import ExploreQuickView from "../custom-components/Overlay/ExploreQuickView";
import Search from "../custom-components/Search";
import CategoriesQuickView from "../custom-components/Overlay/CategoriesQuickView";

const Layout = ({
  menu,
  closeCartMenu,
  closeSearchMenu,
  closeShopMenu,
  openShopMenu,
  openCartMenu,
  openSearchMenu,
  openSignInModal
}) => (
  <div>
    {/* <Spinner /> */}
    <Navbar />
    <Sidebar
      menu={menu}
      openShopMenu={openShopMenu}
      openSearchMenu={openSearchMenu}
      closeSearchMenu={closeSearchMenu}
      openCartMenu={openCartMenu}
      openSignInModal={openSignInModal}
    />
    <Switch>
      <Route exact path={"/"} name="Home" component={Home} />
      <Route exact path={"/explore"} name="Explore" component={Explore} />
      <Route
        exact
        path={"/categories"}
        name="Categories"
        component={Categories}
      />
      <Route
        exact
        path={"/auth"}
        name="Authenticate"
        component={Authenticate}
      />
      <Route exact path={"/products"} name="Products" component={Products} />
      <Route
        exact
        path={"/product/:id"}
        name="Product Information"
        component={Product}
      />
      <Route exact path={"/account"} name="Account" component={Profile} />
      <Route
        exact
        path={"/account/settings"}
        name="Account Profile Settings"
        component={UserSettings}
      />
      <Route
        exact
        path={"/item/:id"}
        name="Product Information"
        component={Product}
      />
      <Redirect from="/" to="/" />
    </Switch>
    <Search menu={menu} closeSearchMenu={closeSearchMenu} />
    <QuickViewTrigger />
    <CartQuickView menu={menu} closeCartMenu={closeCartMenu} />
    <ExploreQuickView menu={menu} closeShopMenu={closeShopMenu} />
    <CategoriesQuickView menu={menu} />
  </div>
);

const mapStateToProps = state => {
  return { menu: state.menu };
};

export default connect(
  mapStateToProps,
  {
    closeCartMenu,
    closeShopMenu,
    closeSearchMenu,
    openShopMenu,
    openCartMenu,
    openSearchMenu
  }
)(Layout);
