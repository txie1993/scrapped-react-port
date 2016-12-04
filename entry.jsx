import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, withRouter} from 'react-router';
import Congrats from './congrats';

const routes = (
    <Route path="/" component={Congrats}>

    </Route>
);

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Router history={hashHistory}>{routes}</Router>, document.getElementById('root'));
});
