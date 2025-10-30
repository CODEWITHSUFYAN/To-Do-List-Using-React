import React, { useState } from "react";
import { useContext } from "react";
import ContextAPI from "./store/Context";

function TodoInput() {
  const [task, setTask] = useState("");
  const {tasks , setTasks} = useContext(ContextAPI)

  const handleAdd = () => {
    setTasks([...tasks,task]);
    setTask("");
  };

  return (
    <div className="top">
      <input
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;