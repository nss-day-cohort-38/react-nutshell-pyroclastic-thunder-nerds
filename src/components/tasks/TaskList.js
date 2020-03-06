import React, { useState, useEffect } from "react";
import TasksManager from "../../modules/TasksManager";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";

const TaskList = props => {
  const [tasks, setTasks] = useState([]);

  // gets all tasks and adds them to 'tasks' array as updated state
  const getTasks = () => {
    TasksManager.getAll().then(tasks => setTasks(tasks));
  };

  // on first page load invokes function that will get all tasks and update state
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <React.Fragment>
      <div className="taskSectionContainer">
        <div className="taskButtonContainer">
          <Link to="/tasks/new">
            <button type="button">Create a Task</button>
          </Link>
        </div>
        <div className="taskCardContainer">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default TaskList;
