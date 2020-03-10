import React, { useState } from "react";
import { Card, CardBody, FormGroup, Label, Input, Button } from "reactstrap";
import TasksManager from "../../modules/TasksManager";
import "./Tasks.css"

const TaskForm = props => {
  // Setting Initial State
  const [task, setTask] = useState({
    taskName: "",
    completionDate: "",
    isCompleted: false
  });
  const [isLoading, setIsLoading] = useState(false);

  // Updating State realtime with input field changes
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

  // When submit button clicked this will save new state object to api & then redirect user to TaskList
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (
      task.taskName === "" ||
      task.completionDate === "" ||
      task.isCompleted === null
    ) {
      window.alert("Please fill in all fields");
    } else {
      setIsLoading(true);
      TasksManager.post(task).then(() => props.history.push("/tasks"));
    }
  };

  return (
    <>
      <div className="flex">
        <Card
          className="width"
          inverse
          style={{
            backgroundColor: "#333",
            border: "2px solid black"
          }}
        >
          <CardBody>
            <form>
              <fieldset>
                <div className="createTaskFormContainer">
                  <FormGroup>
                    <Label htmlFor="taskName">Task Name</Label>
                    <Input
                      type="text"
                      onChange={handleFieldChange}
                      id="taskName"
                      placeholder="Task Name"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="taskDate">Expected Completion Date</Label>
                    <Input
                      type="date"
                      onChange={handleFieldChange}
                      id="completionDate"
                      // placeholder="Completion Date"
                    ></Input>
                  </FormGroup>

                  <Button
                    disabled={isLoading}
                    onClick={constructNewLocation}
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

export default TaskForm;
