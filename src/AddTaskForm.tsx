import React, { useState } from 'react';

function AddTaskForm({ onAdd }) {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim() !== '') {
            onAdd(taskText);
            setTaskText('');
        }
    };

    const handleTextareaChange = (event) => {
        setTaskText(event.target.value);
    };

    return (
        <div className="text-area">
      <textarea
          value={taskText}
          onChange={handleTextareaChange}
          placeholder="Add new task."
          cols="35"
          rows="2"
      />
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default AddTaskForm;
