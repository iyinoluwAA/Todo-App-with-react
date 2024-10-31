import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ todos, deleteTodo, handleEdit }) => {
  return (
    <table className="todo-list">
      <thead>
        <tr>
          <th>To-Do</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.text}</td>
            <td>{todo.date.toLocaleString()}</td>
            <td>
              <button onClick={() => handleEdit(todo.id, todo.text)}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button onClick={() => deleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
