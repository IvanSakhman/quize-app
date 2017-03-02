import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import About from './components/About';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Main} />
        <Route path="/about" component={About} />
    </Route>
);