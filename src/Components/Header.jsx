import React from "react";

const Header = ({ setstatus,status }) => {
  const filterHandler = (e) => {
    setstatus(e.target.value);
  };

  return (
    <header>
      <div className="header-container">
        <div className="hedar-text">
          <h2>Todo List</h2>
          <span>Today i need To :</span>
        </div>
        <div className="header-filter">
          <select value={status} onChange={filterHandler} name="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
