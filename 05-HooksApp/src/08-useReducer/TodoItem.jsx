import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul key={todo.id} className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <span
            className={`align-self-center ${
              todo.done && "text-decoration-line-through"
            }`}
            onClick={() => onToggleTodo(todo.id)}
          >
            {todo.description}
          </span>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};
