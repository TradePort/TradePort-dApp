import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const Home = () => (
    <div className="shop-wrapper has-background-image">
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
            <Slider {...settings} className="fullscreen-slick">
                <div className="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                <div className="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                <div className="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
                <div className="full-slide has-background-image" data-background="http://via.placeholder.com/1920x1080"></div>
            </Slider>
        </div>
    </div>
);
export default Home;