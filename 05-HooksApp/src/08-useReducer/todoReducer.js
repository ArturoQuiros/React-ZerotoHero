export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "Add":
      return [...initialState, action.payload];
    case "Done":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case "Delete":
      return initialState.filter((todo) => todo.id !== action.payload);

    default:
      return initialState;
  }
};
