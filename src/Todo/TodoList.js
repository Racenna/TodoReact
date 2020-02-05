import React from "react";
import TodoItem from "./TodoItems";

export default function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} result={todo.item} />
        ))}
      </ul>
    </div>
  );
}
