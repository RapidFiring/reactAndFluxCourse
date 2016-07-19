/**
 * Created by Admin on 19.07.2016.
 */
'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
    // set initial state
    getInitialState: function() {
        return {
            authors: []
        };
    },
    // get Data for state, here Mock
    // ca be ajax, or other calls
    componentWillMount: function() {
        this.setState({authors: AuthorApi.getAllAuthors()});
    },

    render: function() {
        // for each author draw this snippet
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return(
            // div is the wrapper (top-level-component)
            <div>
                <h1>Authors</h1>

                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        // iterate through data in state
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;