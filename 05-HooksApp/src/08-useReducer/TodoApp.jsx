import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
import { useTodo } from "../hooks";

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

export const TodoApp = () => {
  //const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo;

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

  return (
    <>
      <h1>
        Todo: 10 <small>| Pending : 5</small>
      </h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
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
