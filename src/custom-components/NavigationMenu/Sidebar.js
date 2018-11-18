import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/nephos.png';

const Sidebar = ({ openShopMenu, openCartMenu, openSearchMenu, menu, closeSearchMenu, openSignInModal }) => (
    <div className="main-sidebar">
        <div className="sidebar-brand">
            <Link to="/">
                <img src={Logo} alt="" />
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
                        <Icon.ShoppingCart />
                    </Link>
                </li>
                <li>
                    <Link to="#" className={`open-search ${(menu.isSearchOpen) ? 'is-hidden' : ''}`} onClick={openSearchMenu}>
                        <Icon.Search />
                    </Link>
                    <Link to="#" className={`${(menu.isSearchOpen) ? '' : 'is-hidden'}`} onClick={closeSearchMenu}>
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
                        <Icon.User onClick={() => openSignInModal}/>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);
export default Sidebar;