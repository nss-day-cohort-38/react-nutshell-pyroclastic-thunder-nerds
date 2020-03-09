import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Tasks.css";
import TasksManager from "../../modules/TasksManager";
import { Button, Card, CardBody } from "reactstrap";

const TaskCard = props => {
  const [task, setTask] = useState({
    taskName: props.task.taskName,
    completionDate: props.task.completionDate,
    isCompleted: false
  });

  const handleCompletedButton = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = !task.isCompleted;
    setTask(stateToChange);

    // Soo, setTask is asynchronous so when I was passing 'task' state in below it was passing in the initial state before state updated
    // via setTask, so all I needed to do was pass in a different argument (stateToChange) that contained the new value...!!
    TasksManager.update(stateToChange, props.task.id);
  };

  return (
    <div className="taskCardContainer flex">
      <Card
        className="width"
        inverse
        style={{
          backgroundColor: "#333",
          border: "2px solid black"
        }}
      >
        <CardBody>
          <Link className="taskName" to={`tasks/${props.task.id}/edit`}>
            <p>
              <strong>Task Name:</strong>
            </p>
          </Link>
          <p>{props.task.taskName}</p>
          <p>
            <strong>Expected Completion Date:</strong>
          </p>
          <p>{props.task.completionDate}</p>
          <p className="checkbox">
            <strong>Completed</strong>
          </p>
          <input
            type="checkbox"
            id="isCompleted"
            className="checkbox"
            onClick={handleCompletedButton}
          ></input>
          <br />
          <Button
            type="button"
            className="padding2"
            color="danger"
            onClick={() => props.deleteTask(props.task.id)}
          >
            Delete Task
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TaskCard;