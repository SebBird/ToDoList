import React, { useState } from "react";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [tasks, updateTasks] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  React.useEffect(() => {
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
      <h2>Click to complete, X to delete</h2>
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
/**
 * TODO:
 * LOCAL STORAGE / SESSION STORAGE, LOOK UP - it will keep the data after a refresh of page
 * Eslint added to show you your tiny tiny mistakes (use joke generator for config files)
 *
 **/
