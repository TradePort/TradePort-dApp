import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/nephos.png';


const Navbar = () => (
    <nav className="navbar mobile-navbar is-hidden-desktop is-hidden-tablet" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">
                <img src={Logo} alt="" />
            </Link>
            <Link to="#" className="navbar-item is-icon is-sidebar-toggler">
                <Icon.Sidebar />
            </Link>
            <div className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="navbar-menu">
            <div className="navbar-item has-dropdown">

                <Link to="/account" className="navbar-link">
                    <img src="http://via.placeholder.com/250x250" alt="" />
                    <span className="is-heading">Welcome, Guest</span>
                </Link>

                <div className="navbar-dropdown">
                    <Link to="/cart" className="navbar-item is-flex">
                        <span>Cart</span>
                        <span className="menu-badge">0</span>
                    </Link>
                    <Link to="/auth" className="navbar-item">Login</Link>
                    <Link to="/auth" className="navbar-item">Register</Link>
                </div>
            </div>

            <div className="navbar-item has-dropdown">
                <Link to="#">
                    <Icon.Grid />
                    <span className="is-heading">Categories</span>
                </Link>
                <div className="navbar-dropdown">
                    <Link to="#" className="navbar-item">House</Link>
                    <Link to="#" className="navbar-item">Office</Link>
                    <Link to="#" className="navbar-item">Kids</Link>
                    <Link to="#" className="navbar-item">Kitchen</Link>
                    <Link to="#" className="navbar-item">Accessories</Link>
                </div>
            </div>
        </div>
    </nav>
);
export default Navbar;