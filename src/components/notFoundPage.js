/**
 * Created by MWalters on 21.07.2016.
 */
'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
          <h1>Page Not Found</h1>
          <p>Whoops! Sorry, there is nothing to see here.</p>
          <p><Link to="app" className="btn btn-info btn-sm">Back to Home</Link></p>
      </div>
    )
  }
});

module.exports = NotFoundPage;