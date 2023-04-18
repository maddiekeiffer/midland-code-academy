import React from 'react';
import Button from './Styled/Button';
import Input from './Styled/Input';
import Label from './Styled/ContainerLabel';
import Container from './Styled/ContainerDiv';
import Form from './Styled/Form';

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