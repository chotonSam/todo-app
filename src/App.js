import { useEffect } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

import { useState } from "react";
import "./App.css";

function App() {
  const localData = () => {
    let list = localStorage.getItem("value");

    if (list) {
      return JSON.parse(list);
    } else {
      return[];
    }
  };

  const [inputData, setInputData] = useState("");
  const [todos, setTodos] = useState(localData());
  const [status, setstatus] = useState("all");
  const [filterdTodo, setFilterdTodo] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editedId, setEditedId] = useState(null);

  useEffect(() => {
    const filderHandler = () => {
      switch (status) {
        case "completed":
          setFilterdTodo(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilterdTodo(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterdTodo(todos);
          break;
      }
    };
    filderHandler();
    localStorage.setItem("value", JSON.stringify(todos));
  }, [todos, status]);

  return (
    <div className="App">
      <Header status={status} setstatus={setstatus} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterdTodo={filterdTodo}
        setInputData={setInputData}
        setEditedId={setEditedId}
        setToggleSubmit={setToggleSubmit}
      />
      <Form
        inputData={inputData}
        setInputData={setInputData}
        todos={todos}
        setTodos={setTodos}
        editedId={editedId}
        toggleSubmit={toggleSubmit}
        setToggleSubmit={setToggleSubmit}
      />
    </div>
  );
}

export default App;
