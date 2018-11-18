import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import MetaMaskIcon from "../assets/images/metamask.svg";
import TrezorIcon from "../assets/images/trezor.svg";
import LedgerIcon from "../assets/images/ledger.svg";

const Authenticate = () => (
  <div className="shop-wrapper">
    <div className="section">
      <div className="container">
        <div className="columns account-header is-auth">
          <div className="column is-8 is-offset-2 is-tablet-landscape-padded">
            <div className="auth-title">
              <h2>LOGIN</h2>
              <Link
                to="/"
                className="button feather-button is-small primary-button upper-button raised is-hidden-mobile"
              >
                <span>Home</span>
              </Link>
              <img
                className="brand-filigrane"
                src="assets/images/logo/nephos-greyscale.svg"
                alt=""
              />
            </div>
            <Login className="metamask" title="Authenticate with MetaMask" />
            <Login className="trezor" title="Authenticate with Trezor" />
            <Login className="ledger" title="Authenticate with Ledger" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Authenticate;
