/**
 * Created by MWalters on 22.07.2016.
 */
'use strict';

var React = require('react');

var AuthorForm = React.createClass({
  render: function() {
    return (
      <div className="AuthorForm">
          <form>
              <h1>Manage Author</h1>
              <label htmlFor="firstName">FirstName</label>
              <input type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    ref="firstName"
                    value="" />
              <br/>

              <label htmlFor="lastName">Last Name</label>
              <input type="text"
                     name="lastName"
                     className="form-control"
                     placeholder="Last Name"
                     ref="lastName"
                     value="" />
              <br/>

              <input type="submit" value="Save" className="btn btn-default" />
          </form>
      </div>
    )
  }
});

module.exports = AuthorForm;