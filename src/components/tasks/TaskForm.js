import React, { useState } from "react";
import TasksManager from "../../modules/TasksManager";

const TaskForm = props => {
  const [task, setTask] = useState({
    taskName: "",
    completionDate: "",
    isCompleted: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    console.log(task);
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const handleCompletedRadioBtn = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = !task.isCompleted;
    console.log(stateToChange);
    setTask(stateToChange);
  };

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
              type="text"
              onChange={handleFieldChange}
              id="completionDate"
              placeholder="Completion Date"
            ></input>
            <label htmlFor="trueButton">Complete</label>
            <input
              type="checkbox"
              id="isCompleted"
              onClick={handleCompletedRadioBtn}
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
