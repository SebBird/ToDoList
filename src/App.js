import React, { useState } from "react";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [tasks, updateTasks] = useState([]);

  const addTask = (task) => {
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
    console.log("deleting");
    const newTasks = [...tasks];
    updateTasks(newTasks.filter((task) => task.id !== taskID));
  };

  return (
    <>
      <CreateTask addTask={addTask} />
      <Tasks tasks={tasks} handleDelete={onDelete} />
    </>
  );
};

export default App;
/**
 * TODO:
 * LOCAL STORAGE / SESSION STORAGE, LOOK UP - it will keep the data after a refresh of page
 * Add Strikethrough when complete
 * Add delete button
 * Eslint added to show you your tiny tiny mistakes (use joke generator for config files)
 *
 **/
