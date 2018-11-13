import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

const ExploreQuickView = ({ menu, closeShopMenu }) => (
    <div className={`shop-quickview has-background-image ${(menu.isShopOpen) ? 'is-active' : ''}`} data-background="http://via.placeholder.com/1280x853">
        <div className="inner">
            <div className="quickview-header">
                <h2>TradePort</h2>
                <span id="close-shop-sidebar">
                    <Icon.X onClick={closeShopMenu}/>
                </span>
            </div>
            <ul className="shop-menu">
                <li>
                    <Link to="/shop">
                        <span>Shop</span>
                        <Icon.Grid />
                    </Link>
                </li>
                <li>
                    <Link to="/account">
                        <span>My Account</span>
                        <Icon.User />
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <span>My Orders</span>
                        <Icon.CreditCard />
                    </Link>
                </li>
                <li>
                    <Link to="/wishlist">
                        <span>My Wishlists</span>
                        <Icon.Heart />
                    </Link>
                </li>
            </ul>
            <ul className="user-profile">
                <li>
                    <Link to="/account">
                        <img src="http://via.placeholder.com/250x250" alt="" />
                        <span className="user">
                            <span>Guest</span>
                            <span>0 <small>Items in Cart</small></span>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);

export default ExploreQuickView;