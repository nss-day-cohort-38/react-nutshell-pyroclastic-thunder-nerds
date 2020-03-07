import React, { useState } from "react";
import TasksManager from "../../modules/TasksManager";

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
      <form>
        <fieldset>
          <div className="createTaskFormContainer">
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              onChange={handleFieldChange}
              id="taskName"
              placeholder="Task Name"
            ></input>
            <label htmlFor="taskDate">Expected Completion Date</label>
            <input
              type="date"
              onChange={handleFieldChange}
              id="completionDate"
              // placeholder="Completion Date"
            ></input>
            <label htmlFor="trueButton">Complete</label>
            <input
              type="checkbox"
              id="isCompleted"
              onClick={handleCompletedBtn}
            ></input>

            <button disabled={isLoading} onClick={constructNewLocation}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskForm;
