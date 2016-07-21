/**
 * Created by mwalters on 18.07.2016.
 */
'use strict';
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function() {
    React.render(<Handler/>, document.getElementById('app'));
});