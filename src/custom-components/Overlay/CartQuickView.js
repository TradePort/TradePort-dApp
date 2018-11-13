import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const CartQuickView = ({ menu, closeCartMenu }) => {
    return (
        <div className={`cart-quickview ${(menu.isCartOpen) ? 'is-active' : ''}`}>
            <div className="inner">
                <div className="quickview-header">
                    <h2>Quick Cart</h2>
                    <span id="close-cart-sidebar" onClick={closeCartMenu}>
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
};

export default CartQuickView;