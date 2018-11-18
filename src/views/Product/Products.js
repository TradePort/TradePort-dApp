import React, { Component } from 'react';


class Products extends Component {

    render() {
        return (
            <div className="shop-wrapper">
            <div className="section">
                <div className="container">
        
                    <div className="columns category-header">
                        <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div className="category-title is-product-category">
                                <h2>HOUSE</h2>
                                <div className="category-icon is-hidden-mobile">
                                    {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path d="M458.667,0H53.333C23.893,0.035,0.035,23.893,0,53.333v405.333C0.035,488.107,23.893,511.965,53.333,512h405.333
                                                         c29.441-0.035,53.298-23.893,53.333-53.333V53.333C511.965,23.893,488.107,0.035,458.667,0z M490.667,458.667
                                                         c0,17.673-14.327,32-32,32H53.333c-17.673,0-32-14.327-32-32V53.333c0-17.673,14.327-32,32-32h405.333c17.673,0,32,14.327,32,32
                                                         V458.667z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="245.333" y="42.667" width="21.333" height="352"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M320,181.333h-21.333v21.333H320V224h-21.333v21.333H320c0.295,0.006,0.589,0.006,0.884,0
                                                         c11.538-0.244,20.693-9.795,20.449-21.333v-21.333c0.006-0.295,0.006-0.589,0-0.884C341.089,190.245,331.538,181.089,320,181.333z
                                                         "/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M213.333,202.667v-21.333H192c-0.295-0.006-0.589-0.006-0.884,0c-11.538,0.244-20.693,9.795-20.449,21.333V224
                                                         c-0.006,0.295-0.006,0.589,0,0.884c0.244,11.538,9.795,20.693,21.333,20.449h21.333V224H192v-21.333H213.333z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="42.667" y="384" width="426.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="234.667" y="437.333" width="42.667" height="21.333"/>
                                            </g>
                                        </g>
                                    </svg>                         */}
                                    </div>
                            </div>
        
                            <div className="listing-controls">
                                <div className="layout-controls">
                                    <a href="products.html"><span className="is-active"><i data-feather="grid"></i></span></a>
                                    <a href="products-list.html"><span><i data-feather="list"></i></span></a>
                                </div>
                                <div className="sort-box">
                                    <div className="sort-box-select">
                                        <select data-placeholder="Default order" className="chosen-select-no-single">
                                            <option>Default Sort</option>	
                                            <option>Best Sellers</option>
                                            <option>Highest Rated</option>
                                            <option>Best Deals</option>
                                            <option>Newest Products</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
        
                            <div className="columns is-product-grid is-multiline">
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Red seat</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                45,00
                                            </p>
                                        </div>
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-9">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured">White table</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                350,49
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Blue seat</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                35,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Modern bed</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price is-on-sale">
                                                <span>120,99</span>
                                                <span className="sale-price">299,99</span>
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
        
                                        <div className="on-sale">
                                            <i data-feather="dollar-sign" className="has-simple-popover" data-content="This product is on sale" data-placement="top"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Dark seat</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price is-on-sale">
                                                <span>50,25</span>
                                                <span className="sale-price">79,25</span>
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
        
                                        <div className="on-sale">
                                            <i data-feather="dollar-sign" className="has-simple-popover" data-content="This product is on sale" data-placement="top"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">TV furniture</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                430,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Cabinet</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                240,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
        
                            <div className="show-more"><a href="#">Show more products</a></div>
        
                        </div>
                    </div> 
        
                    <div className="columns category-header">
                        <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div className="category-title is-product-category">
                                <h2>OFFICE</h2>
                                <div className="category-icon is-hidden-mobile">
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
                                    </svg>                        */}
                                     </div>
                            </div>
        
                            <div className="listing-controls">
                                <div className="layout-controls">
                                    <a href="products.html"><span className="is-active"><i data-feather="grid"></i></span></a>
                                    <a href="products-list.html"><span><i data-feather="list"></i></span></a>
                                </div>
                                <div className="sort-box">
                                    <div className="sort-box-select">
                                        <select data-placeholder="Default order" className="chosen-select-no-single">
                                            <option>Default Sort</option>	
                                            <option>Best Sellers</option>
                                            <option>Highest Rated</option>
                                            <option>Best Deals</option>
                                            <option>Newest Products</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
        
                            <div className="columns is-product-grid is-multiline">
                                <div className="column is-9">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured">Imperator</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price is-on-sale">
                                                <span>490,00</span>
                                                <span className="sale-price">699,99</span>
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
        
                                        <div className="on-sale">
                                            <i data-feather="dollar-sign" className="has-simple-popover" data-content="This product is on sale" data-placement="top"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Roller</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                75,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Executive</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                125,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Cosy chair</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price is-on-sale">
                                                <span>88,49</span>
                                                <span className="sale-price">119,99</span>
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
        
                                        <div className="on-sale">
                                            <i data-feather="dollar-sign" className="has-simple-popover" data-content="This product is on sale" data-placement="top"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Ambassador</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                480,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="column is-6">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Conqueror</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                590,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Gentleman</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                375,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
        
                            <div className="show-more"><a href="#">Show more products</a></div>
        
                        </div>
                    </div> 
        
                    <div className="columns category-header">
                        <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div className="category-title is-product-category">
                                <h2>FOR KIDS</h2>
                                <div className="category-icon is-hidden-mobile">
                                    {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path d="M501.333,160H416v21.333h74.667V224H416v21.333h85.333c5.891,0,10.667-4.776,10.667-10.667v-64
                                                         C512,164.776,507.224,160,501.333,160z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M74.667,181.333h170.667V160h-160V10.667C85.333,4.776,80.558,0,74.667,0h-64C4.776,0,0,4.776,0,10.667v224
                                                         c0,5.891,4.776,10.667,10.667,10.667h234.667V224h-224V21.333H64v149.333C64,176.558,68.776,181.333,74.667,181.333z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="74.667" y="117.333" width="170.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M501.333,53.333h-64c-5.891,0-10.667,4.776-10.667,10.667v53.333H416v21.333h21.333c5.891,0,10.667-4.776,10.667-10.667
                                                         V74.667h42.667v64H512V64C512,58.109,507.224,53.333,501.333,53.333z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M170.667,64h-96v21.333h95.872c0.657-0.071,1.32-0.075,1.978-0.012c5.383,0.514,9.331,5.295,8.817,10.678h21.333
                                                         c0.018-0.606,0.018-1.213,0-1.819C202.164,77.01,187.838,63.498,170.667,64z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="42.667" y="160" width="32" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M501.333,426.667H416V448h74.667v42.667H416V512h85.333c5.891,0,10.667-4.776,10.667-10.667v-64
                                                         C512,431.442,507.224,426.667,501.333,426.667z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M74.667,448h170.667v-21.333h-160V277.333c0-5.891-4.776-10.667-10.667-10.667h-64C4.776,266.667,0,271.442,0,277.333v224
                                                         C0,507.224,4.776,512,10.667,512h234.667v-21.333h-224V288H64v149.333C64,443.224,68.776,448,74.667,448z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="74.667" y="384" width="170.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M501.333,320h-64c-5.891,0-10.667,4.776-10.667,10.667V384H416v21.333h21.333c5.891,0,10.667-4.776,10.667-10.667v-53.333
                                                         h42.667v64H512v-74.667C512,324.776,507.224,320,501.333,320z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M170.667,330.667h-96V352h95.872c0.657-0.071,1.32-0.075,1.978-0.012c5.383,0.514,9.331,5.295,8.817,10.678h21.333
                                                         c0.018-0.606,0.018-1.213,0-1.819C202.164,343.677,187.838,330.164,170.667,330.667z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="42.667" y="426.667" width="32" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect y="234.667" width="21.333" height="42.667"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="490.667" y="234.667" width="21.333" height="96"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="266.667" y="85.333" width="21.333" height="426.667"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="373.333" y="85.333" width="21.333" height="426.667"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="277.333" y="128" width="106.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="277.333" y="192" width="106.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="277.333" y="256" width="106.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="277.333" y="320" width="106.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="277.333" y="384" width="106.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="277.333" y="448" width="106.667" height="21.333"/>
                                            </g>
                                        </g>
                                    </svg>                        */}
                                     </div>
                            </div>
        
                            <div className="listing-controls">
                                <div className="layout-controls">
                                    <a href="products.html"><span className="is-active"><i data-feather="grid"></i></span></a>
                                    <a href="products-list.html"><span><i data-feather="list"></i></span></a>
                                </div>
                                <div className="sort-box">
                                    <div className="sort-box-select">
                                        <select data-placeholder="Default order" className="chosen-select-no-single">
                                            <option>Default Sort</option>	
                                            <option>Best Sellers</option>
                                            <option>Highest Rated</option>
                                            <option>Best Deals</option>
                                            <option>Newest Products</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
        
                            <div className="columns is-product-grid is-multiline">
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Tabouret</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                22,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Rabbit lamp</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                14,49
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured">White bed</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                375,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-9">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Toy boxes</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                45,99
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Baby chest</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                <span>185,00</span>
                                                <span className="sale-price">215,00</span>
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
        
                                        <div className="on-sale">
                                            <i data-feather="dollar-sign" className="has-simple-popover" data-content="This product is on sale" data-placement="top"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Small desk</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                190,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name featured">Animals set</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                23,49
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name featured">Wood elephant</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                57,99
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="show-more"><a href="#">Show more products</a></div>
        
                        </div>
                    </div> 
        
                    <div className="columns category-header">
                        <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div className="category-title is-product-category">
                                <h2>KITCHEN</h2>
                                <div className="category-icon is-hidden-mobile">
                                    {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path d="M458.667,0H53.333C23.893,0.035,0.035,23.893,0,53.333v405.333C0.035,488.107,23.893,511.965,53.333,512h405.333
                                                         c29.441-0.035,53.298-23.893,53.333-53.333V53.333C511.965,23.893,488.107,0.035,458.667,0z M490.667,458.667
                                                         c0,17.673-14.327,32-32,32H53.333c-17.673,0-32-14.327-32-32V53.333c0-17.673,14.327-32,32-32h405.333c17.673,0,32,14.327,32,32
                                                         V458.667z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="245.333" y="362.667" width="21.333" height="106.667"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="245.333" y="42.667" width="21.333" height="106.667"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="42.667" y="352" width="426.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="42.667" y="138.667" width="426.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M298.667,192c-9.584-1.094-17.999-6.878-22.453-15.435l-19.093,9.536c8.062,15.783,23.858,26.136,41.547,27.232
                                                         c0.634-0.062,1.273-0.062,1.907,0c5.365,0.527,9.286,5.302,8.76,10.667v74.667h21.333V224c0.018-0.606,0.018-1.213,0-1.819
                                                         C330.164,205.01,315.838,191.498,298.667,192z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M352,213.333c-0.815-0.024-1.631-0.024-2.447,0c-22.888,0.676-40.896,19.778-40.22,42.667h21.333
                                                         c-0.055-0.859-0.055-1.72,0-2.579c0.712-11.07,10.263-19.467,21.333-18.754h21.333v-21.333H352z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M288,224h-21.333v21.333H288c11.019,0,19.723,18.315,21.888,24.725l20.224-6.763C328.779,259.275,316.213,224,288,224z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M352,288h-64c-5.891,0-10.667,4.776-10.667,10.667v64c0,5.891,4.776,10.667,10.667,10.667h64
                                                         c5.891,0,10.667-4.776,10.667-10.667v-64C362.667,292.776,357.891,288,352,288z M341.333,352h-42.667v-42.667h42.667V352z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="352" y="74.667" width="42.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="117.333" y="74.667" width="42.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="352" y="416" width="42.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="117.333" y="416" width="42.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M170.667,288h-32c-5.891,0-10.667,4.776-10.667,10.667v64c0,5.891,4.776,10.667,10.667,10.667h32
                                                         c5.891,0,10.667-4.776,10.667-10.667v-64C181.333,292.776,176.558,288,170.667,288z M160,352h-10.667v-42.667H160V352z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M245.333,330.667v-32c0-5.891-4.776-10.667-10.667-10.667h-32c-5.891,0-10.667,4.776-10.667,10.667v64
                                                         c0,5.891,4.776,10.667,10.667,10.667h32V352h-21.333v-42.667H224v21.333H245.333z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M202.667,309.333h-32c-5.891,0-10.667,4.776-10.667,10.667v42.667c0,5.891,4.776,10.667,10.667,10.667h32
                                                         c5.891,0,10.667-4.776,10.667-10.667V320C213.333,314.109,208.558,309.333,202.667,309.333z M192,352h-10.667v-21.333H192V352z"/>
                                            </g>
                                        </g>
                                    </svg>                        */}
                                     </div>
                            </div>
        
                            <div className="listing-controls">
                                <div className="layout-controls">
                                    <a href="products.html"><span className="is-active"><i data-feather="grid"></i></span></a>
                                    <a href="products-list.html"><span><i data-feather="list"></i></span></a>
                                </div>
                                <div className="sort-box">
                                    <div className="sort-box-select">
                                        <select data-placeholder="Default order" className="chosen-select-no-single">
                                            <option>Default Sort</option>	
                                            <option>Best Sellers</option>
                                            <option>Highest Rated</option>
                                            <option>Best Deals</option>
                                            <option>Newest Products</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
        
                            <div className="columns is-product-grid is-multiline">
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Chromed sink</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                142,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-9">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured">Mini kitchen</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                425,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Auto toaster</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                63,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Modern fridge</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                675,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Coffee Machine</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                178,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="show-more"><a href="#">Show more products</a></div>
        
                        </div>
                    </div> 
        
                    <div className="columns category-header">
                        <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div className="category-title is-product-category">
                                <h2>ACCESSORIES</h2>
                                <div className="category-icon is-hidden-mobile">
                                    {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <rect y="32" width="512" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M480,32H32c-5.891,0-10.667,4.776-10.667,10.667v42.667C21.333,91.224,26.109,96,32,96h448
                                                         c5.891,0,10.667-4.776,10.667-10.667V42.667C490.667,36.776,485.891,32,480,32z M469.333,74.667H42.667V53.333h426.667V74.667z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="245.333" y="160" width="21.333" height="53.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M309.333,74.667H202.667c-5.891,0-10.667,4.776-10.667,10.667V128c0,5.891,4.776,10.667,10.667,10.667h106.667
                                                         c5.891,0,10.667-4.776,10.667-10.667V85.333C320,79.442,315.224,74.667,309.333,74.667z M298.667,117.333h-85.333V96h85.333
                                                         V117.333z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M320,202.667H192c-17.673,0-32,14.327-32,32v202.667c0,5.891,4.776,10.667,10.667,10.667h170.667
                                                         c5.891,0,10.667-4.776,10.667-10.667V234.667C352,216.994,337.673,202.667,320,202.667z M330.667,426.667H181.333v-192
                                                         c0-5.891,4.776-10.667,10.667-10.667h128c5.891,0,10.667,4.776,10.667,10.667V426.667z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="138.667" y="384" width="234.667" height="21.333"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M213.333,245.333c-5.891,0-10.667,4.776-10.667,10.667v32H224v-21.333h21.333v-21.333H213.333z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M277.333,437.333c0,11.782-9.551,21.333-21.333,21.333s-21.333-9.551-21.333-21.333h-21.333
                                                         C213.333,460.898,232.436,480,256,480s42.667-19.102,42.667-42.667H277.333z"/>
                                            </g>
                                        </g>
                                    </svg>                 */}
                                            </div>
                            </div>
        
                            <div className="listing-controls">
                                <div className="layout-controls">
                                    <a href="products.html"><span className="is-active"><i data-feather="grid"></i></span></a>
                                    <a href="products-list.html"><span><i data-feather="list"></i></span></a>
                                </div>
                                <div className="sort-box">
                                    <div className="sort-box-select">
                                        <select data-placeholder="Default order" className="chosen-select-no-single">
                                            <option>Default Sort</option>	
                                            <option>Best Sellers</option>
                                            <option>Highest Rated</option>
                                            <option>Best Deals</option>
                                            <option>Newest Products</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
        
                            <div className="columns is-product-grid is-multiline">
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Styled lamp</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                75,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Golden lamp</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                52,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured">Aquarium</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                235,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-9">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Modern shelf</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                <span>510</span>
                                                <span className="sale-price">629,00</span>
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
        
                                        <div className="on-sale">
                                            <i data-feather="dollar-sign" className="has-simple-popover" data-content="This product is on sale" data-placement="top"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name">Ground shelf</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                80,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="flat-card is-long">
                                        <div className="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info">
                                            <a href="/product"><h3 className="product-name featured-md">Modern cabinet</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                265,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name featured">Ground speakers</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                99,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="flat-card">
                                        <div className="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="" />
                                        </div>
                                        <div className="product-info has-text-centered">
                                            <a href="/product"><h3 className="product-name featured">Modern speakers</h3></a>
                                            <p className="product-description">Lorem ipsum sit dolor amet</p>
                                            <p className="product-price">
                                                175,00
                                            </p>
                                        </div>
        
                                        <div className="actions">
                                            <div className="add"><i data-feather="shopping-cart" className="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div className="like"><i data-feather="heart" className="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="show-more"><a href="#">Show more products</a></div>
        
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        );
    }
}

export default Products;