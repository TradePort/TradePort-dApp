import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import CartQuickView from '../components/CartQuickView';
import ExploreQuickView from '../components/ExploreQuickView';


class Home extends Component {
    render() {
        return (
            <div class="shop-wrapper has-background-image">
                <Search />
                <div class="background-caption">
                    <h1>TradePort</h1>
                </div>
                <div class="hero-caption">
                    <h1>TradePort</h1>
                    <h2>Your one stop shop</h2>
                    <Link to="/explore" className="button big-button primary-button upper-button rounded raised">
                        Explore
                    </Link>
                </div>
                <div class="slider-wrapper">
                    <div class="fullscreen-slick">
                        <div class="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                        <div class="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                        <div class="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                        <div class="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                    </div>
                </div>
                <CartQuickView />
                <ExploreQuickView />
            </div>
        )
    }
}

export default Home;