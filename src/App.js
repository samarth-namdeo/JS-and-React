import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDos from "./MyComponents/ToDos";
import ToDoItem from "./MyComponents/ToDoItem";
import { useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  const onDelete = (todo) => {
    console.log("I'm onDelete of", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno = todos[todos.length - 1] + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header title="t0-d0-L!$t " />
      <AddTodo addTodo={addTodo} />
      <ToDos todos={todos} onDelete={onDelete} />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
