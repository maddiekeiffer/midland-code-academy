import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({filteredToDo, toggleTaskCompletion, deleteTasks}) {
    return(
        <div id="newTask">
            {filteredToDo.map((user, index) => (
                <TaskItem key={index} user={user}
                toggleTaskCompletion={toggleTaskCompletion} 
                deleteTasks={deleteTasks} />
            ))}
            </div>
    );
}