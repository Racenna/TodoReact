import React from "react";
import PropTypes from "prop-types";

function TodoItem({ index, result }) {
  return (
    <li>
      {index + 1} {result}
    </li>
  );
}

TodoItem.propTypes = {
  result: PropTypes.string.isRequired,
  index: PropTypes.number
};

export default TodoItem;
