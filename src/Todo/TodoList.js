import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItems";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onChange={props.onChange}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoList;
