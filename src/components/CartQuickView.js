import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const CartQuickView = () => (
    <div className="cart-quickview">
        <div className="inner">
            <div className="quickview-header">
                <h2>Quick Cart</h2>
                <span id="close-cart-sidebar">
                    <Icon.X />
                </span>
            </div>
            <div className="cart-body">
                <div className="empty-cart has-text-centered">
                    <h3>Your cart is empty</h3>
                    <img src="assets/images/icons/new-cart.svg" alt="" />
                    <Link to="/explore" className="button big-button rounded">
                        Explore
                    </Link>
                    <small>You can create your account later</small>
                </div>
            </div>
        </div>
    </div>
);

export default CartQuickView;