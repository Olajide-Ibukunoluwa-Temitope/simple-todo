import React, { useState } from "react";

const InputTodo = (props) => {
  const [state, setState] = useState({
    title: "",
  });

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(state.title);
    setState({
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={state.title}
        name="title"
        required
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
};

export default InputTodo;
