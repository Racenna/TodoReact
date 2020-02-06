import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItems";

function TodoList(props) {
  return (
    <div className="TodoList">
      <ul>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onChange={props.onChange} />
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
