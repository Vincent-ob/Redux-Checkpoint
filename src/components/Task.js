import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask(task.id, newDescription));
        setIsEditing(false);
    };

    const handleMarkAsDone = () => {
        if (!task.isDone) {
            dispatch(toggleTask(task.id));
        }
    };

    return (
        <div className="Task" style={{ backgroundColor: task.isDone ? '#e0ffe0' : '#fff' }}>
            {isEditing ? (
                <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
            ) : (
                <span
                    className={task.isDone ? 'done' : ''}
                >
                    {task.description}
                </span>
            )}
            <button onClick={() => setIsEditing((prev) => !prev)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={handleMarkAsDone} disabled={task.isDone}>
                Done
            </button>
        </div>
    );
};

export default Task;