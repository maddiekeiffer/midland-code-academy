import './ToDoList.css';
import React, { useState } from 'react';

export function ToDoTaskDisplay() {
    const [username, setUsername] = useState('');
    const [task, setTask] = useState('');

    const HandleUserName = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }
    const HandleTask = (e) => {
        e.preventDefault();
        setTask(e.target.value);
    }
    const [todoList, setToDoList] = useState([
        {id: 1, name: "mads", task: "clean", completed: false},
        {id: 2, name: "mads", task: "cry", completed: false}, 
        {id: 3, name: "mads", task: "repeat", completed: false},  
        ]);

    const AddTasks = (e) => {
        e.preventDefault();
        const updatedToDo = [...todoList, {id: todoList.length+1, name: username, task: task, completed: false}];
        setToDoList(updatedToDo);
        
    }

    const toggleTaskCompletion = (id) => {
        setToDoList(
            todoList.filter((task) => task.id !== id)
            );
    }

    const [filteredTasks, setFilteredTasks] = useState('');

    const filteredToDo = todoList.filter((task) => {
        return task.task.toLowerCase().includes(filteredTasks.toLowerCase());
    })

    const TaskDisplay = () => {
        return(
            <div id="newTask">
            {filteredToDo.map((user, index) => (
                <div key={index}>
                    <label>
                        <input type="checkbox"
                        class="checkbox" 
                        checked={user.completed} 
                        onChange={() => toggleTaskCompletion(user.id)} />
                        <span><b>Task:</b> {user.task}</span>
                        <p>Created By: {user.name}</p>
                    </label>
                </div>
            ))}
            </div>
        );
    }

    return(
        <div>
        <form id="container">
            <label>Username: 
                <input id="username" type="text" class="text" onChange={HandleUserName}></input>
            </label>
            <label>Task: 
                <input id="title" type="text" class="text" onChange={HandleTask}></input>
            </label>
            <button className="add-btn" type="button" onClick={AddTasks}>Add</button>
            <input id="filter" type="text" class="text" onChange={(e) =>
                setFilteredTasks(e.target.value)}></input>
        </form>
        <TaskDisplay />
        </div>
    );
}
