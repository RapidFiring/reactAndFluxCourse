/**
 * Created by MWalters on 22.07.2016.
 */
'use strict';

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired,
        error: React.PropTypes.object
    },

  render: function() {
    return (
      <div className="AuthorForm">
          <form>
              <h1>Manage Author</h1>
                <Input name="firstName"
                       label="First Name"
                       value={this.props.author.firstName}
                       onChange={this.props.onChange}
                       error={this.props.error.firstName}/>

                <Input name="lastName"
                       label="Last Name"
                       value={this.props.author.lastName}
                       onChange={this.props.onChange}
                       error={this.props.error.lastName}/>

              <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
          </form>
      </div>
    );
  }
});

module.exports = AuthorForm;