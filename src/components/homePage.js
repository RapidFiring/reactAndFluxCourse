/**
 * Created by mwalters on 19.07.2016.
 */
'use strict';

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
          <div className="jumbotron">
              <h1>React and Flux Administration</h1>
              <p>React, React Router and Flux for ultra-responsive web apps.</p>
          </div>
        );
    }
});

module.exports = Home;