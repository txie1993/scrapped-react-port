import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, withRouter} from 'react-router';
import Main from './main';

const routes = (
    <Route path="/" component={Main}>

    </Route>
);

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Router history={hashHistory}>{routes}</Router>, document.getElementById('root'));
});
