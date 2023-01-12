import React from "react";
import "../styles/todo.css";

const TaskItem = ({ updateTasks, allTasks, taskItem }) => {
  // function to handle tasks checkbox clicked
  const handleTaskCheckboxClicked = (e, taskItem) => {
    let updatedTasks = allTasks.map((elem) => {
      if (elem.id === taskItem.id) {
        elem.status.complete = !taskItem.status.complete; // toggle the status
      }
      return elem;
    });
    updateTasks(updatedTasks);
  };

  return (
    <li
      className={`task_item ${
        taskItem.status.complete === true ? "checked" : ""
      }`}
      key={taskItem.id}
    >
      <input
        type="checkbox"
        className="task_checkbox"
        onClick={(e) => handleTaskCheckboxClicked(e, taskItem)}
      />
      <p className="">{taskItem.desc}</p>
    </li>
  );
};

export default TaskItem;
