import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Icon from 'react-feather';
import { openQuickViewMenu } from '../actions/navigation.action';

const QuickViewTrigger = ({ menu, openQuickViewMenu }) => (
    <div>
        <div id="quickview-trigger" className={`menu-fab ${(menu.isQuickViewOpen) ? 'is-hidden' : 'is-active'} is-hidden-mobile`}>
            <Link className="hamburger-btn" to="#" onClick={openQuickViewMenu}>
                <span className="menu-toggle">
                    <span className="icon-box-toggle">
                        <span className="rotate">
                            <i className="icon-line-top"></i>
                            <i className="icon-line-center"></i>
                            <i className="icon-line-bottom"></i>
                        </span>
                    </span>
                </span>
            </Link>
        </div>
        {/* <div className={`menu-fab ${(menu.isQuickViewOpen) ? 'is-hidden' : 'is-active'} is-hidden-mobile`}>
            <Link className="hamburger-btn" to="#">
                <Icon.X />
            </Link>
        </div> */}
    </div>
);

const mapStateToProps = (state) => {
    return { menu: state.menu }
}

export default connect(mapStateToProps, {
    openQuickViewMenu
})(QuickViewTrigger);
