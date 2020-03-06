import React from "react";
// import { Link } from "react-router-dom";

const TaskCard = props => {
  return (
    // Now need to figure out / draw out the layout of the user interface for 'Tasks' page
    <div className="taskCardContainer">
      <h3>Task Name:</h3>
      <p>{props.task.taskName}</p>
      <h3>Expected Completion Date:</h3>
      <p>{props.task.completionDate}</p>
      <h3>Completed</h3>
      <input type="radio" value="true"></input>
    </div>
  );
};

export default TaskCard;