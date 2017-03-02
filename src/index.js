import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.querySelector('#root')
);