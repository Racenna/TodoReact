import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoAdd({ onCreate }) {
  const [value, setValue] = useState('');

  function submitHandler(e) {
    e.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <div className="TodoAdd">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Insert todo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}

TodoAdd.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default TodoAdd;
