import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './todo.module.css'

function Todoinput({todo,setTodo}) {
    const [value, setValue] = useState("");
    return <div>
      <div>
        <input type="text" className= {styles.input_box}
          value={value}
          placeholder = "Add a to do ..."
          onChange={(el) => setValue(el.currentTarget.value)}
        />
        <button
            className= {styles.input_box}
            onClick={() => {
                if (value) {
                        setTodo([...todo,
                            {
                                value,
                               id: uuidv4(),
                            },
                        ])
                    setValue("")
                } else {
                    console.log("enterValue")
                }
            }}
        >+</button>
      </div>
   </div>;
}

export default Todoinput;

