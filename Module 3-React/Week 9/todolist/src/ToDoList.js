import React from 'react';

let {username, title} = '';
let todoList = [
    {id: 0, name: "m", task: "clean"},
    {id: 1, name: "m", task: "cry"}, 
    {id: 2, name: "m", task: "repeat"},  
    ];

const HandleUserName = (e) => {
    e.preventDefault();
    username = e.target.value;
    //console.log(username);
}
const HandleTask = (e) => {
    e.preventDefault();
    title = e.target.value;
    //console.log(title);
}
const AddTasks = (e) => {
    e.preventDefault();
    todoList.push({id: todoList.length + 1, name: username, task: title});
    console.log(todoList);
    //console.log(username + "'s to do task: " + title);
    return(
        <div>
        {username}'s to do task: {title}
        </div>
    );
}

export function LoginTaskDisplay() {
    return(
        <div>
        <label>Username: 
            <input id="username" type="text" onChange={(HandleUserName)}></input>
        </label>
        <label>To Do Task: 
            <input id="title" type="text" onChange={HandleTask}></input>
        </label>
        <button className="add-btn" type="button" onClick={AddTasks}>Add</button>
        
        </div>
    );
}


export function TaskDisplay() {
    
    return(
        <div>
        {todoList.map((user, index) => (
            <div key={index}>
            <p>Username: {user.name} Task: {user.task}</p>
            </div>
        ))}
        </div>
    );
}