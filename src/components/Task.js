import React from "react";

function Task({text, category, removeTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={removeTask} id={text}>X</button>
    </div>
  );
}

export default Task;
