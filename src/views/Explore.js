import React from "react";

const Explore = () => (
  <div className="shop-wrapper">
    <div className="search-overlay" />
    <div className="search-input-wrapper is-desktop is-hidden">
      <div className="field">
        <div className="control">
          <input type="text" name="search" autofocus required />
          <span id="clear-search" role="button">
            <i data-feather="x" />
          </span>
          <span className="search-help">
            Type the name of the product you are looking for
          </span>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns category-header">
          <div className="column is-10 is-offset-1 is-tablet-landscape-padded">
            <div className="category-title no-border is-padded">
              <h2>Explore</h2>
              <img
                className="brand-filigrane"
                src="assets/images/logo/nephos-greyscale.svg"
                alt=""
              />
            </div>

            <div className="is-categories-grid">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article
                        className="tile is-child has-background-image"
                        data-background="http://via.placeholder.com/1280x853"
                        onClick="return true"
                      >
                        <div className="tile-content is-small">
                          <h2 className="shop-category is-small">
                            Accessories
                          </h2>
                          <div className="divider" />
                          <p>Inner Comfort</p>
                          <p className="is-italic">
                            Finest products collected amongst the countrie's
                            best artisans.
                          </p>
                          <div className="products is-absolute">
                            119 <span>Products</span>
                          </div>
                          <a href="/products" className="action">
                            <span>Discover</span>
                            <i data-feather="chevron-right" />
                          </a>
                        </div>
                        <div className="tile-overlay" />
                      </article>
                      <article
                        className="tile is-child has-background-image"
                        data-background="http://via.placeholder.com/1280x853"
                        onClick="return true"
                      >
                        <div className="tile-content is-small">
                          <h2 className="shop-category is-small">Kitchen</h2>
                          <div className="divider" />
                          <p>Inner Comfort</p>
                          <p className="is-italic">
                            Finest products collected amongst the countrie's
                            best artisans.
                          </p>
                          <div className="products is-absolute">
                            187 <span>Products</span>
                          </div>
                          <a href="/products" className="action">
                            <span>Discover</span>
                            <i data-feather="chevron-right" />
                          </a>
                        </div>
                        <div className="tile-overlay" />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article
                        className="tile is-child has-min-height has-background-image"
                        data-background="http://via.placeholder.com/1280x853"
                        onClick="return true"
                      >
                        <div className="tile-content">
                          <h2 className="shop-category">House</h2>
                          <div className="divider" />
                          <p>Inner Comfort</p>
                          <p className="is-italic">
                            Finest products collected amongst the countrie's
                            best artisans.
                          </p>
                          <div className="products">
                            268 <span>Products</span>
                          </div>
                          <a href="/products" className="action">
                            <span>Discover</span>
                            <i data-feather="chevron-right" />
                          </a>
                        </div>
                        <div className="tile-overlay" />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article
                      className="tile is-child is-danger has-min-height has-background-image"
                      data-background="http://via.placeholder.com/1280x853"
                      onClick="return true"
                    >
                      <div className="tile-content">
                        <h2 className="shop-category">For kids</h2>
                        <div className="divider" />
                        <p>Their Playground</p>
                        <p className="is-italic">
                          Finest products collected amongst the countrie's best
                          artisans.
                        </p>
                        <div className="products">
                          376 <span>Products</span>
                        </div>
                        <a href="/products" className="action">
                          <span>Discover</span>
                          <i data-feather="chevron-right" />
                        </a>
                      </div>
                      <div className="tile-overlay" />
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article
                    className="tile is-child has-background-image"
                    data-background="http://via.placeholder.com/1280x853"
                    onClick="return true"
                  >
                    <div className="tile-content">
                      <h2 className="shop-category">Office</h2>
                      <div className="divider" />
                      <p>Premium Office furniture</p>
                      <p className="is-italic">
                        Finest products collected amongst the countrie's best
                        artisans.
                      </p>
                      <div className="products">
                        391 <span>Products</span>
                      </div>
                      <a href="/products" className="action">
                        <span>Discover</span>
                        <i data-feather="chevron-right" />
                      </a>
                    </div>
                    <div className="tile-overlay" />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Explore;
