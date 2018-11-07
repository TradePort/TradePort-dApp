import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openShopMenu, openCartMenu, openSearchMenu, closeSearchMenu } from '../actions/navigation.action';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        const { openShopMenu, openCartMenu, openSearchMenu, menu } = this.props;
        return (
            <div className="main-sidebar">
                <div className="sidebar-brand">
                    <Link to="/">
                        <img src="assets/images/logo/nephos.svg" alt="" />
                    </Link>
                </div>
                <div className="sidebar-inner">
                    <ul className="icon-menu">
                        <li>
                            <Link to="#" className="open-shop" onClick={openShopMenu}>
                                <Icon.Home />
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="open-cart" onClick={openCartMenu}>
                                <Icon.ShoppingCart/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="open-search" onClick={openSearchMenu}>
                                <Icon.Search />
                            </Link>
                            <Link to="#" className="is-hidden" onClick={closeSearchMenu}>
                                <Icon.X />
                            </Link>
                        </li>
                        <li className="is-hidden-desktop is-hidden-tablet">
                            <Link to="#">
                                <Icon.Smartphone />
                            </Link>
                        </li>
                    </ul>
                    <ul className="bottom-menu is-hidden-mobile">
                        <li>
                            <Link to="/auth">
                                <Icon.User />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { menu: state.menu }
}

export default connect(mapStateToProps, {
    openShopMenu,
    openCartMenu,
    openSearchMenu,
    closeSearchMenu
})(Sidebar);