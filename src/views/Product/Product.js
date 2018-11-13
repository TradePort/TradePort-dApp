import React, { Component } from 'react';


class Product extends Component {

    render() {
        return (
            <div className="shop-wrapper">
            <div className="search-overlay"></div>
            <div className="search-input-wrapper is-desktop is-hidden">
                <div className="field">
                    <div className="control">
                        <input type="text" name="search" autofocus required />
                        <span id="clear-search" role="button"><i data-feather="x"></i></span>
                        <span className="search-help">Type the name of the product you are looking for</span>
                    </div>
                </div>
            </div>
            <div className="product-panel">
                <div className="panel-header">
                    <div className="likes">
                        <span>263</span>
                        <i data-feather="heart"></i>
                    </div>
                </div>
        
                <div id="product-view" className="product-image translateLeft">
                    <div className="is-carousel">
                        <div>
                            <img src="http://via.placeholder.com/500x500/ffffff/999999" data-action="zoom" alt="" />
                        </div>
                        <div>
                            <img src="http://via.placeholder.com/500x500/ffffff/999999" data-action="zoom" alt="" />
                        </div>
                        <div>
                            <img src="http://via.placeholder.com/500x500/ffffff/999999" data-action="zoom" alt="" />
                        </div>
                    </div>
                </div>
        
                <div id="meta-view" className="translateLeft is-hidden">
                    <div className="detailed-description">
                        <div className="meta-block">
                            <h3>Product name</h3>
                            <p>Red Seat</p>
                        </div>
                        <div className="meta-block">
                            <h3>Product SKU</h3>
                            <p>W589</p>
                        </div>
                        <div className="meta-block">
                            <h3>Colors</h3>
                            <div className="colored-dots">
                                <div className="dot-wrapper">
                                    <div className="dot is-blue"></div>
                                </div>
                                <div className="dot-wrapper">
                                    <div className="dot is-white"></div>
                                </div>
                                <div className="dot-wrapper">
                                    <div className="dot is-dark"></div>
                                </div>
                                <div className="dot-wrapper">
                                    <div className="dot is-cream"></div>
                                </div>
                            </div>
                        </div>
                        <div className="meta-block">
                            <h3 className="spaced">Description</h3>
                            <p className="spaced">Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p>
                            <p className="spaced">Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>
                        </div>
                        <div className="meta-block">
                            <h3>Availability</h3>
                            <p>Available</p>
                        </div>
                        <div className="meta-block">
                            <h3>Dimensions</h3>
                            <p>4” x 4” x 8"</p>
                        </div>
                        <div className="meta-block">
                            <h3>Weight</h3>
                            <p>6.77 Lbs</p>
                        </div>
                        <div className="meta-block">
                            <h3>Shipping Methods</h3>
                            <p>Delivery, UPS, Express</p>
                        </div>
                    </div>
                </div>
        
                <div id="ratings-view" className="translateLeft is-hidden">
                    <div className="product-ratings">
                        <div className="main-rating">
        
                            <h3>Product Rating</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half"></i>
                            </div>
                            <span>Rated <small>4,5/5</small> out of <small>29</small> reviews</span>
                            <span className="add-review modal-trigger" data-modal="review-modal"><i data-feather="plus"></i> Add review</span>
                        </div>
        
                        <div className="customer-ratings">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-32x32">
                                        <img src="http://via.placeholder.com/250x250" alt="" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p>
                                        <span>Elie Daniels</span>
                                        <small>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half"></i>
                                        </small>
                                        <br />
                                        <span className="rating-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-32x32">
                                        <img src="http://via.placeholder.com/250x250" alt="" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p>
                                        <span>John Smith</span>
                                        <small>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </small>
                                        <br />
                                        <span className="rating-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas nullam.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-32x32">
                                        <img src="http://via.placeholder.com/250x250" alt="" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p>
                                        <span>Marjory Cambell</span>
                                        <small>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half"></i>
                                        </small>
                                        <br />
                                        <span className="rating-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</span>
                                    </p>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </div>
        
                <div className="product-actions">
                    <div className="zoom-buttons">
                        <i data-feather="plus-circle"></i>
                        <i data-feather="minus-circle"></i>
                    </div>
                    <div className="right-actions">
                        <span id="show-product" className="product-action is-active"><i data-feather="image"></i></span>
                        <span id="show-meta" className="product-action"><i data-feather="menu"></i></span>
                        <span id="show-ratings" className="product-action"><i data-feather="message-circle"></i></span>
                    </div>
                </div>
            </div>
        
            <div className="product-info-panel">
                <div className="inner-panel">
                    <div className="panel-header">
                        <div className="category-title">
                            {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M458.667,202.667h-64c-5.891,0-10.667,4.776-10.667,10.667v53.333c0,5.891,4.776,10.667,10.667,10.667h64
                                                 c5.891,0,10.667-4.776,10.667-10.667v-53.333C469.333,207.442,464.558,202.667,458.667,202.667z M448,256h-42.667v-32H448V256z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M405.333,106.667c-9.604-1.077-18.042-6.864-22.507-15.435l-19.093,9.536c8.062,15.807,23.888,26.167,41.6,27.232
                                                 c0.634-0.062,1.273-0.062,1.907,0c5.365,0.526,9.287,5.302,8.76,10.667v74.667h21.333v-74.667c0.018-0.606,0.018-1.213,0-1.819
                                                 C436.831,119.677,422.504,106.164,405.333,106.667z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M458.667,128c-0.808-0.024-1.617-0.024-2.425,0c-22.895,0.67-40.911,19.772-40.242,42.667h21.333
                                                 c-0.056-0.866-0.056-1.735,0-2.602c0.718-11.064,10.27-19.45,21.333-18.732H480V128H458.667z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M394.667,138.667h-21.333V160h21.333c11.029,0,19.712,18.315,21.888,24.725l20.235-6.763
                                                 C435.445,173.941,422.88,138.667,394.667,138.667z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M501.333,256H10.667C4.776,256,0,260.776,0,266.667v42.667C0,315.224,4.776,320,10.667,320h490.667
                                                 c5.891,0,10.667-4.776,10.667-10.667v-42.667C512,260.776,507.224,256,501.333,256z M490.667,298.667H21.333v-21.333h469.333
                                                 V298.667z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M469.333,341.333v96c0,5.891-4.776,10.667-10.667,10.667H53.333c-5.891,0-10.667-4.776-10.667-10.667v-96H21.333v96
                                                 c0,17.673,14.327,32,32,32h405.333c17.673,0,32-14.327,32-32v-96H469.333z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M96,448H53.333c-5.891,0-10.667,4.776-10.667,10.667v42.667c0,5.891,4.776,10.667,10.667,10.667H96
                                                 c5.891,0,10.667-4.776,10.667-10.667v-42.667C106.667,452.776,101.891,448,96,448z M85.333,490.667H64v-21.333h21.333V490.667z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M458.667,448H416c-5.891,0-10.667,4.776-10.667,10.667v42.667c0,5.891,4.776,10.667,10.667,10.667h42.667
                                                 c5.891,0,10.667-4.776,10.667-10.667v-42.667C469.333,452.776,464.558,448,458.667,448z M448,490.667h-21.333v-21.333H448V490.667
                                                 z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <rect x="245.333" y="341.333" width="21.333" height="85.333"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <rect x="298.667" y="373.333" width="42.667" height="21.333"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <rect x="170.667" y="373.333" width="42.667" height="21.333"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M426.667,0H85.333C73.551,0,64,9.551,64,21.333v192c0,11.782,9.551,21.333,21.333,21.333h277.333v-21.333H85.333v-192
                                                 h341.333v64H448v-64C448,9.551,438.449,0,426.667,0z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <rect x="213.333" y="224" width="21.333" height="42.667"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <rect x="277.333" y="224" width="21.333" height="42.667"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <rect x="106.667" y="170.667" width="256" height="21.333"/>
                                    </g>
                                </g>
                            </svg>  */}
                                               <h2>Office</h2>
                        </div>
                    </div>
                    <div className="panel-body">
                        <h3 className="product-name">Red Seat <span>SKU-W589</span></h3>
                        <p className="product-description">This seat is nicely and will fit perfectly in your living room.Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis.</p>
        
                        <div className="product-controls">
                            <div className="product-price">
                                <div className="heading">Price</div>
                                <div className="value">$65,00</div>
                            </div>
                            <div className="product-quantity">
                                <div className="heading has-text-centered">Quantity</div>
                                <div className="control">
                                    <input className="input is-rounded" type="number" value="1" />
                                </div>
                            </div>
                            <div className="add-to-cart">
                                <div className="heading is-vhidden">Add to cart</div>
                                <button className="button big-button cart-button primary-button upper-button rounded is-bold raised">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <div className="footer-inner">
                            <div className="recommended">Recommended</div>
                            <div className="columns has-text-centered">
                                
                                <div className="column"></div>
                                
                                <div className="column is-3">
                                    <div className="featured-product">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="#"><h3 className="product-name">Dark seat</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="featured-product">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="#"><h3 className="product-name">Blue seat</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="featured-product">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="#"><h3 className="product-name">Red seat</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="column"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Product;