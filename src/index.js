import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/scss/core.scss';

import loadWeb3 from './util/web3/loadWeb3';

import Layout from './containers/Layout';

import store from './store';
import * as serviceWorker from './serviceWorker';

loadWeb3(window);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" name="Layout" component={Layout} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
