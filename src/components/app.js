/**
 * Created by MWalters on 21.07.2016.
 */
/*eslint-disable strict */ //Disabling check because of global var jquery

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;