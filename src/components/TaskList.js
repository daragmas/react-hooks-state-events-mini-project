import React from "react";
import Task from './Task'

function TaskList({tasks, removeTask}) {
  
  return (
    <div className="tasks">
      {tasks.map((task, index)=><Task 
        key={task.text} 
        text={task.text} 
        category={task.category} 
        removeTask={removeTask}
        id={index}/>)}
    </div>
  );
}

export default TaskList;
