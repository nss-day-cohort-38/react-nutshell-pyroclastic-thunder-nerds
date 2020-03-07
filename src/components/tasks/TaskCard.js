import React from "react";
// import { Link } from "react-router-dom";
import "./Tasks.css"

const TaskCard = props => {
  return (
    // Now need to figure out / draw out the layout of the user interface for 'Tasks' page
    <div className="taskCardContainer">
      <h4>Task Name:</h4>
      <p>{props.task.taskName}</p>
      <h4>Expected Completion Date:</h4>
      <p>{props.task.completionDate}</p>
      <h4>Completed</h4>
      <input type="radio" value="true"></input>
    </div>
  );
};

export default TaskCard;