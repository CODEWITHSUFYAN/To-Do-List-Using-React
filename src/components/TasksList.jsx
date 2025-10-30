import React, { useContext } from 'react'
import ContextAPI from './store/Context'
const TasksList = () => {

  const { tasks , deleteTask} = useContext(ContextAPI)

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