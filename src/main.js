/**
 * Created by mwalters on 18.07.2016.
 */
'use strict';
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// For clean routes (without #) use Router.HistoryLocation
// Check API documentation for further information
Router.run(routes, function() {
    React.render(<Handler/>, document.getElementById('app'));
});