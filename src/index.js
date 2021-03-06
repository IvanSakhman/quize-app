import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import routes from './routers';

import reducers from './reducers';

import '../styles/index.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.querySelector('#root')
);