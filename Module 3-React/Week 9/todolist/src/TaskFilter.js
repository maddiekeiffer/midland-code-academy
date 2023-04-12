import React from 'react';

export default function TaskFilter({setFilteredTasks}) {
    return(
    <input id="filter" type="text" class="text" onChange={(e) => setFilteredTasks(e.target.value)}></input>
    );
}