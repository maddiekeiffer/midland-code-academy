import React, { useState, useEffect, useRef } from 'react';
import TaskInputForm from './TaskInputForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import Container from './Styled/ContainerDiv';
import H5 from './Styled/H5';
import UserTaskContext from './Context/UserTaskContext';

export function ToDoTaskDisplay() {
  // const [username, setUsername] = useState('');
  // const [task, setTask] = useState('');

  const usernameRef = useRef('');
  const taskRef = useRef('');

  const [userTask, setUserTask] = useState({
    username: '',
    task: '',
  })


  const [todoList, setToDoList] = useState([
    { id: 1, name: 'mads', task: "Clean basement room", completed: true },
    { id: 2, name: 'mads', task: "Pack clothes, Minnie's essentials", completed: false },
    { id: 3, name: 'mads', task: "Drive to Breeze's in Bellevue", completed: false },
    { id: 4, name: 'mads', task: "Pick up new clothes from Samantha's house", completed: false },
  ]);

  const [recentTask, setRecentTask] = useState(null);

  const AddTasks = (e) => {
    e.preventDefault();
    const newTask = { id: todoList.length + 1, name: usernameRef.current, task: taskRef.current, completed: false };
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

  // const [userCharCount, setUserCharCount] = useState(0);
  // const [taskCharCount, setTaskCharCount] = useState(0);

  const userCharCountRef = useRef(0);
  const taskCharCountRef = useRef(0);

  const UpdateUserCharCount = () => { 
    userCharCountRef.current = usernameRef.current.length;
    const counterDisplay = document.getElementById("user-count");
    counterDisplay.textContent = `User Character Count: ${userCharCountRef.current}`;
  }
  const UpdateTaskCharCount = () => {
    taskCharCountRef.current = taskRef.current.length;
    const counterDisplay = document.getElementById("task-count");
    counterDisplay.textContent = `Task Character Count: ${taskCharCountRef.current}`;
  }

  // useEffect(() => {
  //   setTaskCharCount(task.length);
  // }, [task]);

  // useEffect(() => {
  //   setUserCharCount(username.length);
  // }, [username]);
  
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
    <UserTaskContext.Provider value={{ userTask, setUserTask }}>
    <Container>
      <H5>Timer: {timer} seconds</H5>
      <H5 id="user-count"></H5>
      <H5 id="task-count"></H5>
    {recentTask && (
      <div>
        <H5>Most Recently Added Task: {recentTask}</H5>
      </div>
    )}
    <TaskInputForm usernameRef={usernameRef} taskRef={taskRef} updateUserCharCount={UpdateUserCharCount} updateTaskCharCount={UpdateTaskCharCount} addTasks={AddTasks} />
      <TaskFilter setFilteredTasks={setFilteredTasks} />
      <TaskList filteredToDo={filteredToDo}  toggleTaskCompletion={toggleTaskCompletion} deleteTasks={DeleteTasks} />
    </Container>
    </UserTaskContext.Provider>
  );
}