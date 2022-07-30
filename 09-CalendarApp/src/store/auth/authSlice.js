import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //auth - not-auth
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state /* action */) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "auth";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state) => {
      state.status = "not-auth";
      state.user = {};
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
