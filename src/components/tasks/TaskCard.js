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

  // Changing isCompleted boolean property in state when checkbox clicked, then hopefully updating existing data with new isCompleted val
  const handleCompletedButton = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = !task.isCompleted;
    setTask(stateToChange);

    const editedTask = {
      id: props.task.id,
      taskName: task.taskName,
      completionDate: task.completionDate,
      isCompleted: task.isCompleted
    };

    // hopefully will get the updated task state obj
    TasksManager.update(editedTask, props.task.id)
  };



  return (
    // Now need to figure out / draw out the layout of the user interface for 'Tasks' page
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
