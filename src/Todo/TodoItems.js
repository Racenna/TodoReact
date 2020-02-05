import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ index, todo, onChange }) {
  const { deleteTodo } = useContext(Context);
  console.log("todo", todo);
  return (
    <li>
      <span>
        <input type="checkbox" onChange={onChange.bind(null, todo.id)} />
        {index + 1}
        &nbsp;
        {todo.title}
        <button onClick={deleteTodo.bind(null, todo.id)}>x</button>
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
