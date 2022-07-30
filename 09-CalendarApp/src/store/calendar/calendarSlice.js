import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
/*
const tempEvent = {
  _id: new Date().getTime(),
  title: "Cumpleaños",
  notes: "buy a cake",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgcolor: "fafafa",
  user: {
    _id: "123",
    name: "Arturo",
  },
};*/

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoading: true,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent !== null) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoading = false;

      payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.di === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },
  },
});

export const {
  onLoadEvents,
  onDeleteEvent,
  onUpdateEvent,
  onSetActiveEvent,
  onAddNewEvent,
} = calendarSlice.actions;
