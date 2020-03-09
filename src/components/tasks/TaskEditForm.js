import React, { useState, useEffect } from "react";
import TasksManager from "../../modules/TasksManager";

// TODO: Figure out what to do about updating the userId FK
const TaskEditForm = props => {
  // setting initial state of task obj to be PUT in api
  const [task, setTask] = useState({
    taskName: "",
    completionDate: "",
    isCompleted: false
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

    TasksManager.update(task, props.match.params.taskId).then(
      setIsLoading(false)
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
      <form>
        <fieldset>
          <div className="editTaskFormContainer">
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              onChange={handleFieldChange}
              id="taskName"
              value={task.taskName}
            ></input>
            <label htmlFor="taskDate">Expected Completion Date</label>
            <input
              type="date"
              onChange={handleFieldChange}
              id="completionDate"
              value={task.completionDate}
            ></input>
            <label htmlFor="trueButton">Complete</label>
            <input
              type="checkbox"
              id="isCompleted"
              onClick={handleCompletedBtn}
            ></input>

            <button disabled={isLoading} onClick={updateExistingTask}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskEditForm;
