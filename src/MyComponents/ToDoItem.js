import React from "react";

const ToDoItem = ({ todos }) => {
  return (
    <div>
      <h4>{todos.title} </h4>
      <p>{todos.desc}</p>
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  );
};

export default ToDoItem;
