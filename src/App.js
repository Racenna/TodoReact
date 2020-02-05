import React, { useState } from "react";
import TodoAdd from "./Todo/TodoAdd";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Javascript" },
    { id: 2, completed: false, title: "React" },
    { id: 3, completed: false, title: "NodeJS" },
    { id: 4, completed: false, title: "Express" }
  ]);

  function changeTodo(id) {
    // console.log(id);
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Context.Provider value={{ deleteTodo }}>
      <div className="App">
        <h1>Todos React</h1>

        <TodoAdd />
        {todos.length ? (
          <TodoList todos={todos} onChange={changeTodo} />
        ) : (
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
