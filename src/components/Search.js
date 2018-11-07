import React from 'react';
import * as Icon from 'react-feather';

const Search = () => (
    <div>
        <div class="search-overlay"></div>
        <div class="search-input-wrapper is-desktop is-hidden">
            <div class="field">
                <div class="control">
                    <input type="text" name="search" autofocus required />
                    <span id="clear-search" role="button">
                        <Icon.X />
                    </span>
                    <span class="search-help">Type the name of the product you are looking for</span>
                </div>
            </div>
        </div>
    </div>
);

export default Search;