import React from 'react';
import { Link } from 'react-router-dom';

const ExploreQuickView = () => (
    <div className="shop-quickview has-background-image" data-background="http://via.placeholder.com/1280x853">
        <div className="inner">
            <div className="quickview-header">
                <h2>TradePort</h2>
                <span id="close-shop-sidebar"><i data-feather="x"></i></span>
            </div>
            <ul className="shop-menu">
                <li>
                    <Link to="/shop">
                        <span>Shop</span>
                        <i data-feather="grid"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/account">
                        <span>My Account</span>
                        <i data-feather="user"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <span>My Orders</span>
                        <i data-feather="credit-card"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/wishlist">
                        <span>My Wishlists</span>
                        <i data-feather="heart"></i>
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