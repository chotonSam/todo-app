import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { RiFileEditFill } from "react-icons/ri";
const Todo = ({ todo, todos, setTodos, setInputData, setEditedId, setToggleSubmit }) => {
  const deleteHandle = () => {
    setTodos(
      todos.filter((item) => {
        return item.id !== todo.id;
      })
    );
  };

  const completeHandle = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editHandler =()=>{
    setInputData(todo.name)
    setEditedId(todo.id)
    setToggleSubmit(false)
  }

  return (
    <div className="todo">
      <li  >
        <div className="text_check" onClick={completeHandle}>
          <span className={todo.completed ? "done" : ""}>{todo.name}</span>
        </div>
        <div className="icons">
          <AiFillDelete onClick={deleteHandle} />
          <RiFileEditFill onClick={editHandler} />
        </div>
      </li>
    </div>
  );
};

export default Todo;
