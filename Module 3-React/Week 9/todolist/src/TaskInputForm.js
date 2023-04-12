import React from 'react';

function TaskInputForm({setUsername, setTask, addTasks}) {

    const HandleUserName = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
        }
    const HandleTask = (e) => {
        e.preventDefault();
        setTask(e.target.value);
        }
    

        return (
            <div>
                <form id="container">
                <label>Username: 
                <input id="username" type="text" class="text" onChange={HandleUserName}></input>
                </label>
                <label>Task: 
                <input id="title" type="text" class="text" onChange={HandleTask}></input>
                <button className="add-btn" type="button" onClick={addTasks}>Add</button>
                </label>
                </form>
            </div>
        )
}
export default TaskInputForm;