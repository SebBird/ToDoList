import React from "react";

const Tasks = ({ tasks, handleDelete, handleComplete }) => {
  const { length } = tasks;

  if (length === 0) {
    return <p>No tasks yet!</p>;
  }

  let completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="taskHolder">
      <p className="taskCounter">Total tasks: {tasks.length}</p>
      <p className="taskCounter">Total tasks completed: {completedTasks}</p>
      {tasks.map(({ name, id, completed }) => {
        return (
          <div key={id} className="tasks">
            <p
              className={completed ? "striked" : ""}
              onClick={() => handleComplete(id)}
            >
              {name}
            </p>
            <button className="completed" onClick={() => handleComplete(id)}>
              &#10003;
            </button>
            <button className="delete" onClick={() => handleDelete(id)}>
              X
            </button>
          </div>
        );
      })}
      {length > 0 && completedTasks === length ? (
        <p>Congratulations, you are productive!</p>
      ) : null}
    </div>
  );
};

export default Tasks;
