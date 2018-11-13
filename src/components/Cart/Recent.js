import React from 'react';

const RecentViewed = props => (
    <div className="columns category-header low-padding">
          <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
            <div className="category-title">
              <h2 className="is-small">RECENTLY VIEWED</h2>
            </div>

            <div className="columns no-controls is-product-grid is-multiline">
              <div className="column is-9">
                <div className="flat-card is-long">
                  <div className="left-image is-md">
                    <img
                      src="http://via.placeholder.com/500x500/ffffff/999999"
                      alt=""
                    />
                  </div>
                  <div className="product-info">
                    <a href="#">
                      <h3 className="product-name featured">Red Alcove</h3>
                    </a>
                    <p className="product-description">
                      Lorem ipsum sit dolor amet
                    </p>
                    <p className="product-price">90,00</p>
                  </div>

                  <div className="actions">
                    <div className="add">
                      <i data-feather="shopping-cart" />
                    </div>
                    <div className="like">
                      <i data-feather="heart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <div className="flat-card">
                  <div className="image">
                    <img
                      src="http://via.placeholder.com/500x500/ffffff/999999"
                      alt=""
                    />
                  </div>
                  <div className="product-info has-text-centered">
                    <a href="#">
                      <h3 className="product-name">Red Seat</h3>
                    </a>
                    <p className="product-description">
                      Lorem ipsum sit dolor amet
                    </p>
                    <p className="product-price">75,00</p>
                  </div>

                  <div className="actions">
                    <div className="add">
                      <i data-feather="shopping-cart" />
                    </div>
                    <div className="like">
                      <i data-feather="heart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <div className="flat-card">
                  <div className="image">
                    <img
                      src="http://via.placeholder.com/500x500/ffffff/999999"
                      alt=""
                    />
                  </div>
                  <div className="product-info has-text-centered">
                    <a href="#">
                      <h3 className="product-name">Executive</h3>
                    </a>
                    <p className="product-description">
                      Lorem ipsum sit dolor amet
                    </p>
                    <p className="product-price">125,00</p>
                  </div>

                  <div className="actions">
                    <div className="add">
                      <i data-feather="shopping-cart" />
                    </div>
                    <div className="like">
                      <i data-feather="heart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <div className="flat-card">
                  <div className="image">
                    <img
                      src="http://via.placeholder.com/500x500/ffffff/999999"
                      alt=""
                    />
                  </div>
                  <div className="product-info has-text-centered">
                    <a href="#">
                      <h3 className="product-name">Cosy chair</h3>
                    </a>
                    <p className="product-description">
                      Lorem ipsum sit dolor amet
                    </p>
                    <p className="product-price">88,00</p>
                  </div>

                  <div className="actions">
                    <div className="add">
                      <i data-feather="shopping-cart" />
                    </div>
                    <div className="like">
                      <i data-feather="heart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="flat-card is-long">
                  <div className="left-image is-md">
                    <img
                      src="http://via.placeholder.com/500x500/ffffff/999999"
                      alt=""
                    />
                  </div>
                  <div className="product-info">
                    <a href="#">
                      <h3 className="product-name featured-md">Ambassador</h3>
                    </a>
                    <p className="product-description">
                      Lorem ipsum sit dolor amet
                    </p>
                    <p className="product-price">480,00</p>
                  </div>

                  <div className="actions">
                    <div className="add">
                      <i data-feather="shopping-cart" />
                    </div>
                    <div className="like">
                      <i data-feather="heart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="flat-card is-long">
                  <div className="left-image is-md">
                    <img
                      src="http://via.placeholder.com/500x500/ffffff/999999"
                      alt=""
                    />
                  </div>
                  <div className="product-info">
                    <a href="#">
                      <h3 className="product-name featured-md">Conqueror</h3>
                    </a>
                    <p className="product-description">
                      Lorem ipsum sit dolor amet
                    </p>
                    <p className="product-price">590,00</p>
                  </div>

                  <div className="actions">
                    <div className="add">
                      <i data-feather="shopping-cart" />
                    </div>
                    <div className="like">
                      <i data-feather="heart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="flat-card is-long">
                  <div className="left-image is-md">
                    <img
                      src="http://via.placeholder.com/500x500/ffffff/999999"
                      alt=""
                    />
                  </div>
                  <div className="product-info">
                    <a href="#">
                      <h3 className="product-name featured-md">Gentleman</h3>
                    </a>
                    <p className="product-description">
                      Lorem ipsum sit dolor amet
                    </p>
                    <p className="product-price">375,00</p>
                  </div>

                  <div className="actions">
                    <div className="add">
                      <i data-feather="shopping-cart" />
                    </div>
                    <div className="like">
                      <i data-feather="heart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="show-more">
              <a href="#">Show more products</a>
            </div>
          </div>
        </div>
);

export default RecentViewed;