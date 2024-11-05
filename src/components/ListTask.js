// components/ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks } from '../redux/actions';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'done') return task.isDone;
        if (filter === 'not') return !task.isDone;
        return true;
    });

    return (
        <div className="ListTask">
            <div className="FilterButtons">
                <button className="all" onClick={() => dispatch(filterTasks('all'))}>All</button>
                <button className="done" onClick={() => dispatch(filterTasks('done'))}>Done</button>
                <button className="not-done" onClick={() => dispatch(filterTasks('not'))}>Not Done</button>
            </div>
            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;