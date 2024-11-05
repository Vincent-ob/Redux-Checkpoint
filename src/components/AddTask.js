// components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (description.trim()) {
            dispatch(addTask(description));
            setDescription('');
        }
    };

    return (
        <div className="AddTask">
            <input
                type="text"
                placeholder="Add a new task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;