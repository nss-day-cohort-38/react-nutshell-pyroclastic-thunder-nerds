import React, { useState, useEffect } from "react";
import TasksManager from "../../modules/TasksManager";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";
import {Button} from "reactstrap"

const TaskList = props => {
  const [tasks, setTasks] = useState([]);

  // TODO: Need to write conditional to render only tasks from DB whose isCompleted is false
  const getTasks = () => {
    TasksManager.getAll().then(tasksFromApi => {
      const filteredTasks = tasksFromApi.filter(task => {
        if (task.isCompleted === false) {
          return task
        }
      })
      setTasks(filteredTasks)
    })
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
            <Button type="button" className="btn1" color="primary">Create a Task</Button>
          </Link>
        </div>
        <div className="taskContainer">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} getTasks={getTasks} deleteTask={deleteTask} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default TaskList;
