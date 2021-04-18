import React from "react";

const Tasks = ({ tasks, handleDelete }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet!</p>;
  }

  return tasks.map(({ name, id }) => {
    return (
      <p key={name} onClick={() => handleDelete(id)}>
        {name}
      </p>
    );
  });
};

export default Tasks;
