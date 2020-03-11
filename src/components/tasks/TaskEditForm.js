import React, { useState, useEffect } from "react";
import { Card, CardBody, FormGroup, Label, Input, Button } from "reactstrap";
import TasksManager from "../../modules/TasksManager";
import "./Tasks.css"

// TODO: Figure out what to do about updating the userId FK
const TaskEditForm = props => {
  // setting initial state of task obj to be PUT in api
  const [task, setTask] = useState({
    taskName: "",
    completionDate: "",
    isCompleted: false,
    userId: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  // Updating initial state realtime with input field changes
  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  // Changing isCompleted boolean property in state when checkbox clicked
  const handleCompletedBtn = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = !task.isCompleted;
    setTask(stateToChange);
  };

  // will run the fetch PUT on submit btn click
  const updateExistingTask = evt => {
    setIsLoading(true);

    const updatedUser = {...task} 
    updatedUser.userId = parseInt(sessionStorage.getItem("Active Id"))

    TasksManager.update(updatedUser, props.match.params.taskId).then(() => {
      setIsLoading(false)
      props.history.push("/tasks")
    }
    );
  };

  // this runs first when page renders which will * help * repopulate user interface w/ existing state vals to edit
  useEffect(() => {
    TasksManager.get(props.match.params.taskId).then(task => {
      setTask(task);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="flex">
        <Card
          className="width"
          inverse
          style={{
            backgroundColor: "#333",
            borderColor: "green",
            border: "2px solid black"
          }}
        >
          <CardBody>
            <form>
              <fieldset>
                <div className="editTaskFormContainer">
                  <FormGroup>
                    <Label htmlFor="taskName">Task Name</Label>
                    <Input
                      type="text"
                      onChange={handleFieldChange}
                      id="taskName"
                      value={task.taskName}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="taskDate">Expected Completion Date</Label>
                    <Input
                      type="date"
                      onChange={handleFieldChange}
                      id="completionDate"
                      value={task.completionDate}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="trueButton" className="checkbox--complete">Complete</Label>
                    <Input
                      className="checkbox"
                      type="checkbox"
                      id="isCompleted"
                      onClick={handleCompletedBtn}
                    ></Input>
                  </FormGroup>
                  <Button
                    type="button"
                    disabled={isLoading}
                    onClick={updateExistingTask}
                    color="success"
                    className="padding2"
                  >
                    Submit
                  </Button>
                </div>
              </fieldset>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TaskEditForm;
