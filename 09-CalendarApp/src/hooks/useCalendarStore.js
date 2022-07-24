import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onSetActiveEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      //create
    } else {
      //update
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  return {
    //props
    events,
    activeEvent,
    //methods
    setActiveEvent,
    startSavingEvent,
  };
};
