import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, onChange }) {
  const { deleteTodo } = useContext(Context);
  console.log("todo", todo);
  return (
    <li className="TodoItem">
      <span>
        <input type="checkbox" onChange={onChange.bind(null, todo.id)} />
        {todo.title}
      </span>
      <button onClick={deleteTodo.bind(null, todo.id)}>X</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
