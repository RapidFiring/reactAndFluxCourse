/**
 * Created by MWalters on 21.07.2016.
 */
'use strict';
var React = require('react');

var AuthorList = React.createClass({
    propTypes: {
        // declare expectations in the development environment
        authors: React.propTypes.array.isRequired
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
            <div>
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

module.exports = AuthorList;