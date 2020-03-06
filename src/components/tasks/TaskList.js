import React, { useState, useEffect } from "react";
import TasksManager from "../../modules/TasksManager";

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

  tasks.map(task => {
    return (
      <div className="taskCardContainer">
        <TaskCard key={task.id} task={task} />
      </div>
    );
  });
};

export default TaskList;
