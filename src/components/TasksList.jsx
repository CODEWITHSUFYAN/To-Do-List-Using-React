import React from 'react'

const TasksList = ({ tasks, deleteTask }) => {
  return (
        <div className="task">
         {tasks.map((t, index) => (
          <div key={index} className="task-item">
          <span>{t}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
           ))}
        </div>
  )
}

export default TasksList