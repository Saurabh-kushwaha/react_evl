import React, { useState } from 'react';
import Todoinput from './Todoinput';
import TodoList from './TodoList';
import styles from './todo.module.css'
function Todo() {

  const [todo, setTodo] = useState([]);

  const onDeleteItem = (ItemToDelete) => {
    const newTodoList = todo.filter((todo) => todo.id !== ItemToDelete.id)
    setTodo(newTodoList);
  }

  return (
    <div>
       <Todoinput todo = {todo} setTodo = {setTodo}/>
      <div>
        <ul className= {styles.ul}>
          {todo.map((todo) =>
            <TodoList key = {todo.id} todo={todo} onDeleteItem = {onDeleteItem} />
          )}  
          
        </ul>
      </div>
    </div>
  );
}

export default Todo;
