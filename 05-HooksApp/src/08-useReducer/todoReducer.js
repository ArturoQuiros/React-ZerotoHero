export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type #1 not done");
    default:
      return initialState;
  }
};
