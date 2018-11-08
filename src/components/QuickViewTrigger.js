import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openQuickViewMenu, closeQuickViewMenu } from '../actions/navigation.action';

const QuickViewTrigger = ({ menu, openQuickViewMenu, closeQuickViewMenu }) => (
    <div id="quickview-trigger" className="menu-fab is-hidden-mobile">
        <Link className="hamburger-btn" to="#" onClick={(menu.isQuickViewOpen) ? closeQuickViewMenu : openQuickViewMenu}>
            <span className="menu-toggle">
                <span className={`icon-box-toggle ${(menu.isQuickViewOpen) ? 'active' : ''}`}>
                    <span className="rotate">
                        <i className="icon-line-top"></i>
                        <i className="icon-line-center"></i>
                        <i className="icon-line-bottom"></i>
                    </span>
                </span>
            </span>
        </Link>
    </div>
);

const mapStateToProps = (state) => {
    return { menu: state.menu }
}

export default connect(mapStateToProps, {
    openQuickViewMenu,
    closeQuickViewMenu
})(QuickViewTrigger);
