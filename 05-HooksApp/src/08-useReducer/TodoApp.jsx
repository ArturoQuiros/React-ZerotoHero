import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosPending,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodo();

  return (
    <>
      <h1>
        Todo: {todosCount}
        <small>| Pending : {todosPending} </small>
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
