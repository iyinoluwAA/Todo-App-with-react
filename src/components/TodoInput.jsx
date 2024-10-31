import React, { useState } from 'react';

const TodoInput = ({addTodo}) => {
    const [input, setInput] = useState('')

    const handleAdd = ()=>{
        if (input.trim()){
            addTodo(input);
            setInput('');
        }
    };

    return ( 
            <>
            <section className='form-container'>
                    <div className="todo-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new to-do"
            />
            <button className='form-btn' onClick={handleAdd}>Add</button>
            </div>
            </section>
            </>
     );
}
 
export default TodoInput;