/**
 * Created by Admin on 19.07.2016.
 */
'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
    // set initial state
    getInitialState: function() {
        return {
            authors: []
        };
    },
    // get Data for state, here Mock
    // ca be ajax, or other calls
    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },

    render: function() {
        return(
            // div is the wrapper (top-level-component)
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;