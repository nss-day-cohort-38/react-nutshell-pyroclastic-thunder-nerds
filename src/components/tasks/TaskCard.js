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

    // setTask is asynchronous, needed to pass in value differently than by using initial 'task' state before setTask ran.
    TasksManager.update(stateToChange, props.task.id).then(() => {
      if (task.isCompleted) {
        // TODO: how do I clear this card from DOM here?...
      }
    });
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
            <p>
              <strong>Task Name:</strong>
            </p>
          <Link className="taskName" to={`tasks/${props.task.id}/edit`}>
          <p className="taskName">{props.task.taskName}</p>
          </Link>
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