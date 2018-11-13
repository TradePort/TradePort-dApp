import React from "react";
import RecentViewed from "../Cart/Recent";

const ZeroCart = props => (
  <div className="shop-wrapper">
    <div className="search-overlay" />
    <div className="search-input-wrapper is-desktop is-hidden">
      <div className="field">
        <div className="control">
          <input type="text" name="search" autofocus required />
          <span id="clear-search" role="button">
            <i data-feather="x" />
          </span>
          <span className="search-help">
            Type the name of the product you are looking for
          </span>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns account-header">
          <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
            <div className="account-title">
              <h2>MY CART</h2>
              <img
                className="brand-filigrane"
                src="assets/images/logo/nephos-greyscale.svg"
                alt=""
              />
            </div>

            <div className="tabs account-tabs">
              <ul>
                <li>
                  <a href="account.html">Account</a>
                </li>
                <li>
                  <a href="wishlist.html">Wishlist</a>
                </li>
                <li className="is-active">
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="orders.html">Orders</a>
                </li>
              </ul>
            </div>

            <div className="columns is-account-grid is-multiline">
              <div className="column is-12">
                <div className="flat-card is-auto empty-cart-card">
                  <div className="empty-cart has-text-centered">
                    <h3>Your cart is currently empty</h3>
                    <img src="assets/images/icons/new-cart.svg" alt="" />
                    <a
                      href="categories.html"
                      className="button big-button rounded"
                    >
                      Continue shopping
                    </a>
                    <small>Discover our featured items</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RecentViewed />
      </div>
    </div>
  </div>
);

export default ZeroCart;
