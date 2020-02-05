import React from "react";
import TodoAdd from "./Todo/TodoAdd";
import TodoList from "./Todo/TodoList";
import "./App.css";

function App() {
  const todos = [
    { id: 1, item: "Todos" },
    { id: 2, item: "Todos" },
    { id: 3, item: "Todos" },
    { id: 4, item: "Todos" }
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
