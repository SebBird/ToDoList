import React from "react";

const Tasks = ({ tasks, handleDelete, handleComplete }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet!</p>;
  }

  return (
    <p>
      Total tasks: {tasks.length}
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
    </p>
  );
};

export default Tasks;
