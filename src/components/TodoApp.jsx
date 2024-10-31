import React, {useState} from "react";
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import EditModal from './EditModal'
import './todoApp.css'

const TodoApp = () => {
    const [ todos, setTodos ] = useState([])
    const  [ isEditing, setIsEditing ] = useState(false);
    const [ editId, setEditId ] = useState(null);
    const [ editText, setEditText ] = useState('');

    const addTodo = (newTodo)=>{
        setTodos([...todos, { id: Date.now(), text: newTodo, date: new Date() }])
    }

    const deleteTodo = (id)=>{
        setTodos(todos.filter((todo)=> todo.id != id));
    }

    const handleEdit = (id, text) => {
        setIsEditing(true);
        setEditId(id);
        setEditText(text);
    }

    const saveEdit = (id, newText)=>{
        setTodos(todos.map(todo => todo.id === id? {...todo , text: newText} : todo));
        setIsEditing(false);
        setEditId(null);
        setEditText('');
    }

    return ( 
        <>
        <section>
                <div className="todo-app">
            <h1>To-Do App</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} handleEdit={handleEdit} />
            {isEditing && (
                <EditModal
                editText={editText}
                setEditText={setEditText}
                saveEdit={() => saveEdit(editId, editText)}
                closeModal={() => setIsEditing(false)}
                />
            )}
            </div>
        </section>

        </>
     );
}

export default TodoApp;
