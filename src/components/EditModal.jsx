import React from 'react';

const EditModal = ({ editText, setEditText, saveEdit, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit To-Do</h2>
        <input
          className='modal-input'
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          placeholder="Edit your to-do"
        />
        <button onClick={saveEdit}>Save</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
