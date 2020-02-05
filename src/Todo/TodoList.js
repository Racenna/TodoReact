import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItems";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => (
          <TodoItem key={todo.id} result={todo.title} index={index} />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoList;
