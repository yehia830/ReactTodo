const React = require('react');
const {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoApi')

export var TodoList = React.createClass({
 render: function () {
   var {todos, showCompleted, searchText} = this.props;
   var renderTodos = () => {
     if(todos.length === 0){
       return(
         <p className='container__message'>Nothing to do</p>
       )
     }
     return  TodoAPI.filterTodos(todos,showCompleted,searchText).map((todo) => { //map calls the function for every element in the array
       return(
         <Todo key={todo.id} {...todo}/> //...todo takes all property of the object (id and text) and makes them prop
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

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
