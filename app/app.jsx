const React = require('react');
const ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')

$(document).foundation();
//app css
require('style!css!sass!applicationStyles');



ReactDOM.render(
    <TodoApp/>, //property
    document.getElementById('app'));
