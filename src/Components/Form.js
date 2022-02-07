import React from "react";

const Form = ({ handleSubmit, handleChange, input }) => {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        value={input}
        onChange={(event) => handleChange(event)}
        placeholder="new task"
      />
      <input value="Add task" type="submit" />
    </form>
  );
};

export default Form;
