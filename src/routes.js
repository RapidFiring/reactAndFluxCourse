/**
 * Created by MWalters on 21.07.2016.
 */
'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
        <Redirect from="about-us" to="about"/> <!--Redirect old pages-->
        <Redirect from="awthers" to="authors"/> <!--Redirect Typos-->
        <Redirect from="about/*" to="about"/> <!--Redirect old directories-->
    </Route>
);

module.exports = routes;