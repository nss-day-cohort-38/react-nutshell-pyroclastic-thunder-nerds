import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Tasks.css";
import TasksManager from "../../modules/TasksManager";

const TaskCard = props => {

  const [task, setTask] = useState({
    taskName: props.task.taskName,
    completionDate: props.task.completionDate,
    isCompleted: false
  });

  // TODO: On checkbox click should change isCompleted from false to true (right now need to click then unclick.....)
  const handleCompletedButton = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = !task.isCompleted;
    console.log(`Before setTask updates state: ${task.isCompleted}`)
    setTask(stateToChange);
    // OK, so task.isCompleted is still false here after setTask runs.....
    console.log(`After setTask updates state: ${task.isCompleted}`)

    // ROADBLOCK: so the update call is working, but for some reason I have to click on and then click off before I can see the 
    // isComplete: false -> isComplete: true
    TasksManager.update(task, props.task.id)
  };



  return (
    <div className="taskCardContainer">
      <h4>Task Name:</h4>
      <p>{props.task.taskName}</p>
      <h4>Expected Completion Date:</h4>
      <p>{props.task.completionDate}</p>
      <h4>Completed</h4>
      <input
        type="checkbox"
        id="isCompleted"
        onClick={handleCompletedButton}
      ></input>
      <Link to={`tasks/${props.task.id}/edit`}>
        <button>Edit Task</button>
      </Link>
    </div>
  );
};

export default TaskCard;
