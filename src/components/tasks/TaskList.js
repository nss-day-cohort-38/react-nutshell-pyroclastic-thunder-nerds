import React, { useState, useEffect } from "react";
import TasksManager from "../../modules/TasksManager";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";
import {Button} from "reactstrap"

const TaskList = props => {
  const [tasks, setTasks] = useState([]);

  // TODO: One thing I tried to do was filter through all tasks for tasks whose isComplete is false and then set only those tasks to
  // state... Then this component returns a node list of only those tasks to the DOM.
  // Wondering if it's bc setTasks is asynchronous.. JSX renders before line 20 runs...
  const getTasks = () => {
    TasksManager.getAll().then(tasksFromApi => {
      // tasks.filter(task => {
      //   if (task.isCompleted === false) {
      //     console.log(task)
      //     // setTasks(task).then(TasksManager.getAll())
      //     console.log("tasks have been set!")
      //   } 
      // })

      setTasks(tasksFromApi)
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
            <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default TaskList;
