import React, { useState, useEffect } from "react";
import TasksManager from "../../modules/TasksManager";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";
import {Button} from "reactstrap"

const TaskList = props => {
  const [tasks, setTasks] = useState([]);

  // gets all tasks and adds them to 'tasks' array as updated state
  const getTasks = () => {
    TasksManager.getAll().then(tasks => setTasks(tasks))
  };

  const deleteTask = id => {
    TasksManager.delete(id).then(() => {
      TasksManager.getAll().then(setTasks);
    });
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
            <Button type="button" color="primary">Create a Task</Button>
          </Link>
        </div>
        <div className="taskContainer">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default TaskList;
