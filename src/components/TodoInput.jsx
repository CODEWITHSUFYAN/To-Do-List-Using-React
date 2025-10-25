import React, { useState } from "react";

function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTask(task);
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