import React, { useState, useEffect } from 'react';
import TaskInputForm from './TaskInputForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import Container from './Styled/ContainerDiv';
import H5 from './Styled/H5';

export function ToDoTaskDisplay() {
  const [username, setUsername] = useState('');
  const [task, setTask] = useState('');


  const [todoList, setToDoList] = useState([
    { id: 1, name: 'mads', task: "Clean basement room", completed: true },
    { id: 2, name: 'mads', task: "Pack clothes, Minnie's essentials", completed: false },
    { id: 3, name: 'mads', task: "Drive to Breeze's in Bellevue", completed: false },
    { id: 4, name: 'mads', task: "Pick up new clothes from Samantha's house", completed: false },
  ]);

  const [recentTask, setRecentTask] = useState(null);

  const AddTasks = (e) => {
    e.preventDefault();
    const newTask = { id: todoList.length + 1, name: username, task: task, completed: false };
    const updatedToDo = [
      ...todoList,
      newTask,
    ];
    setToDoList(updatedToDo);
    setRecentTask(newTask.task);
  };

  useEffect(() => {
    console.log('most recent task:', recentTask);
  }, [recentTask]);
  

  const [isChecked, setIsChecked] = useState(false);

  const toggleTaskCompletion = () => {
    setIsChecked(!isChecked);

    //Can use this code if want to remove task with checkbox:
    //setToDoList(todoList.filter((task) => task.id !== id));
  };

  const [filteredTasks, setFilteredTasks] = useState('');

  const filteredToDo = todoList.filter((task) => {
    return task.task.toLowerCase().includes(filteredTasks.toLowerCase());
  });

  function DeleteTasks(id) {
    const newList = todoList.filter((item) => item.id !== id);

    setToDoList(newList);
    }

  const [userCharCount, setUserCharCount] = useState(0);
  const [taskCharCount, setTaskCharCount] = useState(0);

  useEffect(() => {
    setTaskCharCount(task.length);
  }, [task]);

  useEffect(() => {
    setUserCharCount(username.length);
  }, [username]);
  
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    //implementing the setInterval method
    const interval = setInterval(() => {
      setTimer((prevCount) => prevCount + 1);
    }, 1000);
    
    //Clearing the interval
    return () =>  {
      clearInterval(interval);
    }
  }, []);


  return (
    <Container>
      <H5>Timer: {timer} seconds</H5>
      <H5>User Character Count: {userCharCount}</H5>
      <H5>Task Character Count: {taskCharCount}</H5>
    {recentTask && (
      <div>
        <H5>Most Recently Added Task: {recentTask}</H5>
      </div>
    )}
      <TaskInputForm setUsername={setUsername} setTask={setTask} addTasks={AddTasks} />
      <TaskFilter setFilteredTasks={setFilteredTasks} />
      <TaskList filteredToDo={filteredToDo}  toggleTaskCompletion={toggleTaskCompletion} deleteTasks={DeleteTasks} />
    </Container>
  );
}