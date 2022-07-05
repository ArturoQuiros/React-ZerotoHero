import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recoletar la Gema del Alma",
    done: false,
  },
  {
    id: ((new Date().getTime() * 3) / 2) * 1.5,
    description: "Recoletar la Gema del Poder",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add",
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        Todo: 10 <small>| Pending : 5</small>
      </h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <ul>
            <h4>Agregar TODO</h4>
            <hr></hr>
            <TodoAdd onNewTodo={handleNewTodo} />
          </ul>
        </div>
      </div>
    </>
  );
};
