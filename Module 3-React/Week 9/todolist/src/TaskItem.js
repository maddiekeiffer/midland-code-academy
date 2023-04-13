import React from 'react';
import Container from './Styled/ContainerDiv';
import Button from './Styled/Button';
import P from './Styled/P';

export default function TaskItem({user, toggleTaskCompletion, deleteTasks}) {

    return(
        <Container>
            <label>
                <input type="checkbox"
                className="checkbox" 
                checked={user.completed} 
                onChange={() => toggleTaskCompletion(user.id)} />
                <span>
                    <b>Task:</b> {user.task}
                </span>
                <P>Created By: {user.name}</P>
                <Button className="delete-btn" type="button" onClick={() => deleteTasks(user.id)}>Delete</Button>
            </label>
    </Container>  
    );
}