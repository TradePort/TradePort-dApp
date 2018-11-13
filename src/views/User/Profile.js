import React, { Component } from 'react';


class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shop-wrapper">
            <div className="search-overlay"></div>
            <div className="search-input-wrapper is-desktop is-hidden">
                <div className="field">
                    <div className="control">
                        <input type="text" name="search" autofocus required />
                        <span id="clear-search" role="button"><i data-feather="x"></i></span>
                        <span className="search-help">Type the name of the product you are looking for</span>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
        
                    <div className="columns account-header">
                        <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div className="account-title">
                                <h2>ACCOUNT</h2>
                                <img className="brand-filigrane" src="assets/images/logo/nephos-greyscale.svg" alt="" />
                            </div>
        
                            <div className="tabs account-tabs">
                                <ul>
                                    <li className="is-active"><a href="account.html">Account</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="orders.html">Orders</a></li>
                                </ul>
                            </div>
        
                            <div className="columns is-account-grid is-multiline">
        
                                <div className="column is-5">
                                    <div className="flat-card profile-card is-auto">
                                        <div className="card-body">
                                            <div className="profile-image">
                                                <img src="http://via.placeholder.com/250x250" alt="" />
                                            </div>
                                            <div className="username has-text-centered">
                                                <span>Elie Daniels</span>
                                                <small>Member since Sep 23 2017</small>
                                            </div>
                                        </div>
                                        <div className="profile-footer has-text-centered">
                                            <span className="achievement-title">Next Achievement</span>
                                            <div className="count">
                                                24/150
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flat-card profile-info-card is-auto is-dark is-achievement">
                                        <div className="card-body">
                                            <img src="assets/images/logo/nephos-gold.svg" alt="" />
                                            <div className="achievement-name">
                                                <span className="is-gold">Nephos Gold Customer</span>
                                                <span>As a Gold Customer, you have a permanent 10% discount on all your purchases.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flat-card profile-info-card is-auto is-dark is-achievement">
                                        <div className="card-body">
                                            <img src="assets/images/logo/nephos-referral.svg" alt="" />
                                            <div className="achievement-name">
                                                <span className="is-green">Nephos Referer</span>
                                                <span>You have referred <b>30+</b> customers. You get a 2.5% discount on all your purchases.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="column is-7">
                                    <div className="flat-card profile-info-card is-auto">
                                        <div className="card-title">
                                            <h3>Account details</h3>
        
                                            <div className="edit-account has-simple-popover popover-hidden-mobile" data-content="Edit Account" data-placement="top">
                                                <a href="account-edit.html"><i className="feather-icons" data-feather="settings"></i></a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="columns">
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">First Name</span>
                                                        <span className="label-value">Elie</span>
                                                    </div>
        
                                                    <div className="info-block">
                                                        <span className="label-text">Email</span>
                                                        <span className="label-value">eliedaniels@gmail.com</span>
                                                    </div>
                                                </div>
        
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">Last Name</span>
                                                        <span className="label-value">Daniels</span>
                                                    </div>
        
                                                    <div className="info-block">
                                                        <span className="label-text">Phone</span>
                                                        <span className="label-value">+1 555 623 568</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="card-bg" src="assets/images/logo/nephos-greyscale.svg" alt="" />
                                    </div>
                                    <div className="flat-card profile-info-card is-auto">
                                        <div className="card-title">
                                            <h3>Billing address</h3>
                                            <div className="edit-account is-vhidden">
                                                <a href="account-edit.html"><i className="feather-icons" data-feather="settings"></i></a>
                                            </div>
        
                                        </div>
                                        <div className="card-body">
                                            <div className="columns">
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">Number</span>
                                                        <span className="label-value">23, Block C2</span>
                                                    </div>
        
                                                    <div className="info-block">
                                                        <span className="label-text">City</span>
                                                        <span className="label-value">Los Angeles</span>
                                                    </div>
        
                                                    <div className="info-block">
                                                        <span className="label-text">State</span>
                                                        <span className="label-value">CA</span>
                                                    </div>
                                                </div>
        
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">Street</span>
                                                        <span className="label-value">Church Street</span>
                                                    </div>
        
                                                    <div className="info-block">
                                                        <span className="label-text">Postal Code</span>
                                                        <span className="label-value">100065</span>
                                                    </div>
        
                                                    <div className="info-block">
                                                        <span className="label-text">Country</span>
                                                        <span className="label-value">United States</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Profile;