const React = require('react');
const ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


$(document).foundation();
//app css
require('style!css!sass!applicationStyles');



ReactDOM.render(
    <p>BoilerPlate 3</p>, //property
    document.getElementById('app'));
