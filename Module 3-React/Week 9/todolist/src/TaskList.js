import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({filteredToDo, toggleTaskCompletion, isChecked, deleteTasks}) {
    return(
        <div id="newTask">
            {filteredToDo.map((user, index) => (
                <TaskItem key={index} user={user}
                isChecked={isChecked}
                toggleTaskCompletion={toggleTaskCompletion} 
                deleteTasks={deleteTasks} />
            ))}
            </div>
    );
}