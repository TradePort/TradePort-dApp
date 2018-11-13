import React from 'react';
import { Link } from 'react-router-dom';

const Authenticate = () => (
    <div className="shop-wrapper">
        <div className="section">
            <div className="container">
                <div className="columns account-header is-auth">
                    <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
                        <div className="auth-title">
                            <h2>LOGIN</h2>
                            <Link to="/" className="button feather-button is-small primary-button upper-button raised is-hidden-mobile">
                                <span>Home</span>
                            </Link>
                            <img className="brand-filigrane" src="assets/images/logo/nephos-greyscale.svg" alt="" />
                        </div>
                        <div className="flat-card is-auto is-auth-form">
                            <div className="columns is-gapless is-flex-mobile">
                                <div className="column is-6 has-text-centered image-column is-padded">
                                    <div className="store-wrapper">
                                        <img src="assets/images/logo/nephos-white.svg" alt="" />
                                        <div className="title">
                                            TradePort
                                            </div>
                                        <div className="subtitle">An unforgetable Customer Experience</div>
                                    </div>
                                    <div className="nephos-overlay"></div>
                                </div>
                                <div className="column is-6 is-mobile-padded">

                                    <div className="tabs-wrapper animated-tabs">
                                        <div className="tabs is-form-tabs">
                                            <ul>
                                                <li className="is-active" data-tab="login"><Link to="#">Login</Link></li>
                                            </ul>
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

export default Authenticate;