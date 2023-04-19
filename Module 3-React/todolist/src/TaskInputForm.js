import React from 'react';
import Button from './Styled/Button';
import Input from './Styled/Input';
import Label from './Styled/ContainerLabel';
import Container from './Styled/ContainerDiv';
import Form from './Styled/Form';

function TaskInputForm({usernameRef, taskRef, updateUserCharCount, updateTaskCharCount, addTasks}) {

    const HandleUserName = (e) => {
        e.preventDefault();
        //setUsername(e.target.value);
        usernameRef.current = e.target.value;
        updateUserCharCount();
        }
    const HandleTask = (e) => {
        e.preventDefault();
        //setTask(e.target.value);
        taskRef.current = e.target.value;
        updateTaskCharCount();
        }
    

        return (
            <Container>
                <Form>
                    <Label>Username: 
                        <Input primary id="username" type="text" onChange={HandleUserName}></Input>
                    </Label>
                    <Label>Task: 
                        <Input primary id="title" type="text" onChange={HandleTask}></Input>
                        <Button primary className="add-btn" type="button" onClick={addTasks}>Add</Button>
                    </Label>
                </Form>
            </Container>
        )
}
export default TaskInputForm;