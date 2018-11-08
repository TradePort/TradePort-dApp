import React from 'react';
import * as Icon from 'react-feather';

const Search = ({menu, closeSearchMenu}) => (
    <div>
        <div className={`search-overlay ${(menu.isSearchOpen) ? 'is-active' : ''}`}></div>
        <div className={`search-input-wrapper is-desktop ${(menu.isSearchOpen) ? '' : 'is-hidden'}`}>
            <div className="field">
                <div className={`control ${(menu.isSearchOpen) ? 'is-active' : ''}`}>
                    <input type="text" name="search" autoFocus={true} required />
                    <span id="clear-search" role="button">
                        <Icon.X onClick={closeSearchMenu}/>
                    </span>
                    <span className="search-help">Type the name of the product you are looking for</span>
                </div>
            </div>
        </div>
    </div>
);

export default Search;