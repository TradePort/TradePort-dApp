import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    closeCartMenu,
    closeShopMenu,
    closeSearchMenu,
    openQuickViewMenu
 } from '../actions/navigation.action';
import Search from '../components/Search';
import CartQuickView from '../components/CartQuickView';
import ExploreQuickView from '../components/ExploreQuickView';
import CategoriesQuickView from '../components/CategoriesQuickView';


class Home extends Component {
    render() {
        const { menu, closeCartMenu, closeShopMenu, openQuickViewMenu } = this.props;
        return (
            <div className="shop-wrapper has-background-image">
                <Search />
                <div className="background-caption">
                    <h1>TradePort</h1>
                </div>
                <div className="hero-caption">
                    <h1>TradePort</h1>
                    <h2>Your one stop shop</h2>
                    <Link to="/explore" className="button big-button primary-button upper-button rounded raised">
                        Explore
                    </Link>
                </div>
                <div className="slider-wrapper">
                    <div className="fullscreen-slick">
                        <div className="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                        <div className="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                        <div className="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                        <div className="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                    </div>
                </div>
                <CartQuickView menu={menu} closeCartMenu={closeCartMenu} />
                <ExploreQuickView menu={menu} closeShopMenu={closeShopMenu}/>
                <CategoriesQuickView menu={menu} openQuickViewMenu={openQuickViewMenu}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { menu: state.menu }
}

export default connect(mapStateToProps, {
    closeCartMenu,
    closeShopMenu,
    closeSearchMenu,
    openQuickViewMenu
})(Home);
