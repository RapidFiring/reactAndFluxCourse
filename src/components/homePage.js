/**
 * Created by mwalters on 19.07.2016.
 */
'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function () {
        return (
          <div className="jumbotron">
              <h1>React and Flux Administration</h1>
              <p>React, React Router and Flux for ultra-responsive web apps.</p>
              <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
          </div>
        );
    }
});

module.exports = Home;