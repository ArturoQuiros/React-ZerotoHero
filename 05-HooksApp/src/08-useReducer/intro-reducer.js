const initialState = [
  {
    id: 1,
    todo: "Recoletar la Piedra de Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "Add a todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recoletar la Piedra del Tiempo",
  done: false,
};

const addTodoAction = {
  type: "Add a todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log({ state: todos });
