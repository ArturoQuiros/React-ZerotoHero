import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <>
      <ul key={todo.id} className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{todo.description}</span>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
};
