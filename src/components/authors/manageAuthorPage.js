'use strict';

var React = require('react');
var AuthorForm = require('./authorForm')

var ManageAuthorPage = React.createClass({
  render: function() {
    return (
      <div className="ManageAuthorPage">
          <AuthorForm />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;