import React from 'react';

export default function TaskItem({user, toggleTaskCompletion, deleteTasks}) {

    return(
        <div>
        <label>
            <input type="checkbox"
            className="checkbox" 
            checked={user.completed} 
            onChange={() => toggleTaskCompletion(user.id)} />
            <span>
            <b>Task:</b> {user.task}
            </span>
            <p>Created By: {user.name}</p>
            <button className="delete-btn" type="button" onClick={() => deleteTasks(user.id)}>Delete</button>
        </label>
    </div>  
    );
}