const React = require('react');
const ReactDOM = require('react-dom');
var {Provider} = require('react-redux')
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')
const actions = require('actions');
const store = require('configureStore').configure();
const TodoApi = require('TodoApi');

store.subscribe(() => {
  var state = store.getState();
  console.log('New State', store.getState());
  TodoApi.setTodos(state.todos);

});

var initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos))



$(document).foundation();
//app css
require('style!css!sass!applicationStyles');



ReactDOM.render(
    <Provider store={store}>
      <TodoApp/>
    </Provider>,
    document.getElementById('app'));

    // *******How to use Redux*********
    // first thing use provider from react-redux to set up the store and put your app in there
    // so all the children have access to the store, then on TodoApp we took off any props getting passed to
    // children like todolist because they can just call dispatch for it, and got rid of all the handler
    // then remove handler you pass down to todo and on module.exports you use the method
    // connect(),
    // which takes two arguments (arrow function with state and which one you want to return)
    // (what component is it connecting to)
    // then it adds props to that component
    // then on todo you make actions and link it up and use whatever methods you need
    //
