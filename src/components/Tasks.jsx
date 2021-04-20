import React from "react";

const Tasks = ({ tasks, handleDelete, handleComplete }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet!</p>;
  }

  return (
    <div>
      <p className="taskCounter">
        Total tasks completed: {tasks.filter((task) => task.completed).length}
      </p>
      <p className="taskCounter">Total tasks: {tasks.length}</p>
      {tasks.map(({ name, id, completed }) => {
        return (
          <>
            <div className="tasks">
              <p
                key={name}
                onClick={() => handleComplete(id)}
                className={completed ? "striked" : ""}
              >
                {name}
              </p>
              <button className="delete" onClick={() => handleDelete(id)}>
                x
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Tasks;
