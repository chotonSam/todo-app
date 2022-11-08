import React from "react";

const Form = ({
  setInputData,
  inputData,
  todos,
  setTodos,
  editedId,
  toggleSubmit,
  setToggleSubmit,
}) => {
  const inputHandler = (e) => {
    setInputData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputData) {
    } else if (inputData && !toggleSubmit) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editedId) return { ...todo, name: inputData };
          return todo;
        })
      );
    } else {
      setTodos([
        ...todos,
        {
          name: inputData,
          id: Math.random() * 1000,
          completed: false,
        },
      ]);
    }

    setInputData("");
    setToggleSubmit(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>{toggleSubmit ? 'Add a task': 'Edit the task'}</h2>
      <input
        value={inputData}
        onChange={inputHandler}
        name="newItem"
        type="text"
      />
      {toggleSubmit ? (
        <button className="form-btn" type="submit">
          Add item
        </button>
      ) : (
        <button className="form-btn" type="submit">
          Edit item
        </button>
      )}
    </form>
  );
};

export default Form;
