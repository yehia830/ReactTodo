const React = require('react');
const Todo = require('Todo');

var TodoList = React.createClass({
 render: function () {
   var {todos} = this.props;
   var renderTodos = () => {
     if(todos.length === 0){
       return(
         <p className='container__message'>Nothing to do</p>
       )
     }
     return todos.map ((todo) => { //map calls the function for every element in the array
       return(
         <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> //...todo takes all property of the object (id and text) and makes them prop
       )
     })
   };
   return(
     <div>
       {renderTodos()}
     </div>
   )
 }
});

module.exports = TodoList;
