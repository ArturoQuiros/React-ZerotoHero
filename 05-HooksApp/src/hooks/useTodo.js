//todos
//handlers
import React, { useEffect, useReducer } from "react";

const initialState = [
  /*{
      id: new Date().getTime(),
      description: "Recoletar la Gema del Alma",
      done: false,
    },*/
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "Delete",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    console.log({ id });
    dispatch({
      type: "Done",
      payload: id,
    });
  };

  return {};
};
