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
                                            Nephos
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
                                                <li data-tab="register"><Link to="#">Register</Link></li>
                                            </ul>
                                        </div>
                                        <div id="login" className="navtab-content is-active">
                                            <form>
                                            <div className="control">
                                                <label className="auth-label">Email*</label>
                                                <input type="email" className="input" placeholder="" />
                                            </div>
                                            <div className="control">
                                                <label className="auth-label">Password*</label>
                                                <input type="password" className="input" placeholder="" />
                                            </div>
                                            <div className="control">
                                                <label className="checkbox-wrap is-small">
                                                    <input id="house" type="checkbox" className="d-checkbox" checked />
                                                    <span></span>
                                                    <small>Remember me?</small>
                                                </label>
                                            </div>
                                            <div className="button-wrapper">
                                                <button type="submit" className="button feather-button is-small primary-button upper-button raised">
                                                    <span>Login</span>
                                                </button>
                                                <Link to="#" className="forgotten">Forgot Password ?</Link>
                                            </div>
                                        </form>
                                        </div>
                                        <div id="register" className="navtab-content">
                                            <form>
                                            <div className="control">
                                                <label className="auth-label">Email*</label>
                                                <input type="email" className="input" placeholder="" />
                                            </div>
                                            <div className="control">
                                                <label className="auth-label">Password*</label>
                                                <input type="password" className="input" placeholder="" />
                                            </div>
                                            <div className="control">
                                                <label className="auth-label">Confirm Password*</label>
                                                <input type="password" className="input" placeholder="" />
                                            </div>
                                            <div className="button-wrapper">
                                                <button type="submit" className="button feather-button is-small primary-button upper-button raised">
                                                    <span>Register</span>
                                                </button>
                                            </div>
                                        </form>
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