import React from 'react';
import Button from './Styled/Button';
import Input from './Styled/Input';
import Label from './Styled/ContainerLabel';
import Container from './Styled/ContainerDiv';

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
            <Container>
                <form id="container">
                    <Label>Username: 
                        <Input primary id="username" type="text" class="text" onChange={HandleUserName}></Input>
                    </Label>
                    <Label>Task: 
                        <Input primary id="title" type="text" class="text" onChange={HandleTask}></Input>
                        <Button primary className="add-btn" type="button" onClick={addTasks}>Add</Button>
                    </Label>
                </form>
            </Container>
        )
}
export default TaskInputForm;