import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {LoginTaskDisplay, TaskDisplay} from './ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <LoginTaskDisplay />
    <TaskDisplay />
  </React.StrictMode>
);


