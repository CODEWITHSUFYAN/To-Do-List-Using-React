import React, { useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TasksList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <main>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </main>
  );
}

export default App;
