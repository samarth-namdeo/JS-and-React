import React from "react";
import ToDoItem from "./ToDoItem";

const ToDos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3 ">To-Dos</h3>
      {props.todos.map((todo) => {
        return <ToDoItem todos={todo} />;
      })}
    </div>
  );
};

export default ToDos;
