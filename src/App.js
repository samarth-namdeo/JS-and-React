import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDos from "./MyComponents/ToDos";
import ToDoItem from "./MyComponents/ToDoItem";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I'm onDelete of", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Finish DL course #1",
      desc: "Ng course on coursera",
    },
    {
      sno: 2,
      title: "Play TT",
      desc: "After coding hahaha",
    },
    {
      sno: 3,
      title: "Go to BMP",
      desc: "Eat all chaats haha",
    },
  ]);
  return (
    <div>
      <Header title="t0-d0-L!$t " />
      <ToDos todos={todos} onDelete={onDelete} />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
