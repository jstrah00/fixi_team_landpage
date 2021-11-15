import React from 'react';
import './styles/tasks.css';
import TaskItem from './TaskItem';

export default function Tasks({ tasks, toggle, HandleToggleTaskStatus, HandleTaskDelete, finished_tasks }){
    return (
        <div className="tasks-container">
            <h1 className="tasks-title">My tasks</h1>
            <h2 className="tasks-add" onClick={toggle}>Create</h2>
            <h2 className="tasks-subtitle">{finished_tasks} remaining</h2>
            <div className="items-container">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} HandleToggleTaskStatus={HandleToggleTaskStatus} HandleTaskDelete={HandleTaskDelete}/>
                ))}
                
            </div>
        </div>
    )
}