import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filterdTodo,
  setInputData,
  setEditedId,
  setToggleSubmit,
}) => {
  const clearHandle = () => {
    setTodos([]);
  };

  return (
    <div className="todo_list">
      <ul>
        {filterdTodo.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              setInputData={setInputData}
              setEditedId={setEditedId}
              setToggleSubmit={setToggleSubmit}
            />
          );
        })}
      </ul>
      <div className="clear-all">
        <button onClick={clearHandle}>Clear All</button>
      </div>
    </div>
  );
};

export default TodoList;
