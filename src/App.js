import React from "react";
import TodoAdd from "./Todo/TodoAdd";
import TodoList from "./Todo/TodoList";
import "./App.css";

function App() {
  const todos = [
    { id: 1, title: "Javascript" },
    { id: 2, title: "React" },
    { id: 3, title: "NodeJS" },
    { id: 4, title: "Express" }
  ];

  return (
    <div className="App">
      <h1>Todos React</h1>

      <TodoAdd />

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
