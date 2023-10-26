import React, { useState } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
        { id: getRandomId(), text: 'Fix a sink' },
        { id: getRandomId(), text: 'Pay for bills' },
    ]);

    function getRandomId() {
        return Math.random().toString(36).substr(2, 9);
    }

    const addTask = (text) => {
        const newTask = {
            id: getRandomId(),
            text,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div className="app-box">
            <AddTaskForm onAdd={addTask} />
            <div className="tasks-box">
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={deleteTask} />
                ))}
            </div>
        </div>
    );
}

export default App;
