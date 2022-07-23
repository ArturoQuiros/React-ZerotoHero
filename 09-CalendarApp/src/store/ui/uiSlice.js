import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    onOpenModal: (state /* action */) => {
      state.isModalOpen = true;
    },
    onCloseModal: (state /* action */) => {
      state.isModalOpen = false;
    },
  },
});

export const { onOpenModal, onCloseModal } = uiSlice.actions;
