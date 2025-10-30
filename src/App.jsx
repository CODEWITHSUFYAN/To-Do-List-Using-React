import React, { useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TasksList.jsx";
import ContextAPI from "./components/store/Context.jsx";

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
      <ContextAPI.Provider value={{addTask,deleteTask,setTasks,tasks}}>
        <TodoInput  />
        <TodoList />
      </ContextAPI.Provider>
    </main>
  );
}



export default App;
