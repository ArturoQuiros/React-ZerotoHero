import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

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
    dispatch({
      type: "Done",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    todosPending: todos.filter((todo) => !todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  };
};
