import React, { useState } from 'react';
import TaskInputForm from './TaskInputForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';

export function ToDoTaskDisplay() {
  const [username, setUsername] = useState('');
  const [task, setTask] = useState('');

  const [todoList, setToDoList] = useState([
    { id: 1, name: 'mads', task: 'clean', completed: false },
    { id: 2, name: 'mads', task: 'cry', completed: false },
    { id: 3, name: 'mads', task: 'repeat', completed: false },
  ]);

  const AddTasks = (e) => {
    e.preventDefault();
    const updatedToDo = [
      ...todoList,
      { id: todoList.length + 1, name: username, task: task, completed: false },
    ];
    setToDoList(updatedToDo);
  };

  const toggleTaskCompletion = (id) => {
    setToDoList(todoList.filter((task) => task.id !== id));
  };

  const [filteredTasks, setFilteredTasks] = useState('');

  const filteredToDo = todoList.filter((task) => {
    return task.task.toLowerCase().includes(filteredTasks.toLowerCase());
  });
  
  function DeleteTasks(id) {
    const newList = todoList.filter((item) => item.id !== id);

    setToDoList(newList);
    }

  return (
    <div>
      <TaskInputForm setUsername={setUsername} setTask={setTask} addTasks={AddTasks} />
      <TaskFilter setFilteredTasks={setFilteredTasks} />
      <TaskList filteredToDo={filteredToDo} toggleTaskCompletion={toggleTaskCompletion} deleteTasks={DeleteTasks} />
    </div>
  );
}