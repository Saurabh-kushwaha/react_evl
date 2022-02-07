import React, { useState } from 'react';
import styles from './todo.module.css'
function TodoList({ todo, onDeleteItem }) {
    const [isStricked, setIsStricked] = useState(false);
    const [isEditModeOn, setIsEditModeOn] = useState(false);
    return (
    <li className={styles.TodoItem}>
      {isEditModeOn ? (
        <input className= {styles.edit_box} type="text" />
      ) : (
        <>
          <input type="checkbox" className={styles.chekbox}
          onChange={() => {
              setIsStricked(!isStricked);
          }}
          />
          <span
            className={
                                isStricked ? styles.strike : styles.normal
            }
            >
            {todo.value}
          </span>
        </>
        )}
          <button onClick={() => onDeleteItem(todo)}>
              <img className={styles.icon} src="https://img.icons8.com/color/48/000000/delete-user-data.png" alt='_icon'/>
          </button>
            <button onClick={() => setIsEditModeOn(!isEditModeOn)}>
               <img className={styles.icon} src="https://img.icons8.com/ios/50/000000/edit--v1.png" alt='icon'/>
            {isEditModeOn ? 'Cancle Edit': ''}
         </button>
    </li>
  );
}

export default TodoList;
