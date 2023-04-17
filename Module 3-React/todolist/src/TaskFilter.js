import React from 'react';
import Input from './Styled/Input';
import Label from './Styled/ContainerLabel';
import Container from './Styled/ContainerDiv';

export default function TaskFilter({setFilteredTasks}) {
    return(
        <Container>
            <Label>Filter: 
            <Input id="filter" type="text" class="text" onChange={(e) => setFilteredTasks(e.target.value)}></Input>
            </Label>
        </Container>
    );
}