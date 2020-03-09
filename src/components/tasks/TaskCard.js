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

  // TODO: On checkbox click should change isCompleted from false to true (right now need to click then unclick.....)
  // it works on the edit form but I think that's more straightforward bc you click a btn to trigger it...
  const handleCompletedButton = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = !task.isCompleted;
    console.log(`Before setTask updates state: ${task.isCompleted}`);
    setTask(stateToChange);
    // OK, so task.isCompleted is still false here after setTask runs.....
    console.log(`After setTask updates state: ${task.isCompleted}`);

    // ROADBLOCK: so the update call is working, but for some reason I have to click on and then click off before I can see the
    // isComplete: false -> isComplete: true
    TasksManager.update(task, props.task.id);
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
