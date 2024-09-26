import "./App.css";
import { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState(""); // Renamed state variable
  const [list, setList] = useState([]);

  const eventhandler = (event) => {
    setTaskInput(event.target.value); // Update input state
  };

  const addtask = () => {
    const newTask = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskname: taskInput, // Store the task name
      complete: false,
    };
    if (taskInput !== "") {
      setList([...list, newTask]); // Add the task to the list
      setTaskInput(""); // Clear the input after adding
    }
  };

  const completeTask = (id) => {
    setList(
      list.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const deletetask = (id) => {
    setList(list.filter((task) => task.id !== id)); // Filter to remove task by id
  };

  return (
    <div className="App">
      <input
        value={taskInput}
        onChange={eventhandler}
        placeholder="Enter task"
      />
      <button onClick={addtask}>Add task</button>

      <div className="list">
        {list.map((task) => (
          <div key={task.id}>
            <h1 className={task.completed ? "completed" : ""}>
              {task.taskname}
            </h1>
            <div className="button-container">
              <button onClick={() => completeTask(task.id)}>Completed</button>
              <button onClick={() => deletetask(task.id)}>Delete task</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
