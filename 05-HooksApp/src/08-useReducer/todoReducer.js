export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "Add":
      return [...initialState, action.payload];
    case "Edit":
      throw new Error("Action.Edit #1 not done");
    case "Delete":
      throw new Error("Action.type #1 not done");

    default:
      return initialState;
  }
};
