import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'

import './assets/scss/core.scss';

import Home from './containers/Home';
import Authenticate from './containers/Authenticate';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import QuickViewTrigger from './components/QuickViewTrigger';
// import Spinner from './components/Spinner';

import store, { history } from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                {/* <Spinner /> */}
                <Navbar />
                <Sidebar />
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/auth"} component={Authenticate} />
                <QuickViewTrigger />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
