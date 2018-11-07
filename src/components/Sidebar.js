import React, { Component } from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
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
                            <Link to="#" className="open-shop">
                                <Icon.Home />
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="open-cart">
                                <Icon.ShoppingCart />
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="open-search">
                                <Icon.Search />
                            </Link>
                            <Link to="#" className="is-hidden is-inactive">
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
export default Sidebar;