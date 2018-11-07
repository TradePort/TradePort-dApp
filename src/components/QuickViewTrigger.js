import React from 'react';
import { Link } from 'react-router-dom';


const QuickViewTrigger = () => (
    <div id="quickview-trigger" className="menu-fab is-hidden-mobile">
        <Link className="hamburger-btn" to="#">
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
);

export default QuickViewTrigger;