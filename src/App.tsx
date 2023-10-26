import React, { useState } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
        { id: '1', text: 'Fix a sink' },
        { id: '2', text: 'Pay fo bills' },
    ]);

    const addTask = (text) => {
        const newTask = {
            id: new Date().getTime().toString(),
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
