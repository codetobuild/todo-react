import { useState } from "react";
import "../styles/todo.css";
import TaskItem from "./TaskItem.component";

let taskId = 1;

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  // function to update tasks state
  const updateTasks = (updatedTasks) => setTasks([...updatedTasks]);

  // function to handle addition of new tasks
  const handleAddTaskButtonClicked = (e) => {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      return; // no need to add new tasks
    }
    taskId += 1;
    const newTask = {
      id: taskId,
      desc: inputText,
      status: {
        complete: false,
      },
    };

    // update state values
    updateTasks([...tasks, newTask]);
    setInputText("");
  };

  // control input element with component state
  const handleInputChange = (e) => {
    e.preventDefault();

    setInputText(() => e.target.value);
  };
  // add new task on enter key clicked
  const handleInputKeyDown = (e) => {
    const keycode = e.keyCode;
    // check is key pressed is enter key
    if (keycode === 13) {
      handleAddTaskButtonClicked(e);
    }
  };

  return (
    <div className="todo_wrapper">
      <h1 className="todo_header">TODO LIST</h1>
      <div className="todo_input_wrapper">
        <input
          className="todo_input_element"
          type="text"
          placeholder="What needs to be done?"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <button className="add_btn" onClick={handleAddTaskButtonClicked}>
          ADD
        </button>
      </div>
      <div className="tasks_wrapper">
        {tasks.map((taskItem, index) => (
          <TaskItem
            key={index}
            allTasks={tasks}
            updateTasks={updateTasks}
            taskItem={taskItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
