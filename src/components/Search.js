import React from 'react';
import * as Icon from 'react-feather';

const Search = () => (
    <div>
        <div className="search-overlay"></div>
        <div className="search-input-wrapper is-desktop is-hidden">
            <div className="field">
                <div className="control">
                    <input type="text" name="search" autoFocus={true} required />
                    <span id="clear-search" role="button">
                        <Icon.X />
                    </span>
                    <span className="search-help">Type the name of the product you are looking for</span>
                </div>
            </div>
        </div>
    </div>
);

export default Search;