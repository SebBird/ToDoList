import React, { useState, useEffect } from "react";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [tasks, updateTasks] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    if (!task) {
      return;
    }
    updateTasks([
      ...tasks,
      {
        id: new Date().toLocaleString("en-gb"),
        name: task,
        completed: false,
      },
    ]);
  };

  const onDelete = (taskID) => {
    const newTasks = [...tasks];
    updateTasks(newTasks.filter((task) => task.id !== taskID));
  };

  const onComplete = (taskID) => {
    console.log(taskID);
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.id === taskID);
    newTasks[taskIndex].completed = newTasks[taskIndex].completed
      ? false
      : true;
    console.log(newTasks);
    updateTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>ToDoList - ReactJS</h1>
      <h2>By Sebastian Bird</h2>
      <CreateTask addTask={addTask} />
      <Tasks
        tasks={tasks}
        handleComplete={onComplete}
        handleDelete={onDelete}
      />
    </div>
  );
};

export default App;
