import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [task, updateTask] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    addTask(task);
    updateTask("");
  };

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <label htmlFor="taskinput">What do you need to do?</label>
        <input
          id="taskInput"
          value={task}
          onChange={(e) => updateTask(e.target.value)}
          type="text"
        />
        <button type="button" onClick={(e) => submitForm(e)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateTask;

//ALTERNATE USING CLASS
// class CreateTask extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { task: "" };
//   }

//   handleAddTask({ name, value }) {
//     console.log(name, value);
//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <form onSubmit="">
//         <label htmlFor="taskinput">What do you need to do?</label>
//         <input
//           value={this.state.task}
//           onChange={(e) => this.handleAddTask(e.target)}
//           type="text"
//           name="task"
//           id="taskinput"
//         />
//         <button>Add</button>
//       </form>
//     );
//   }
// }

// export default CreateTask;
