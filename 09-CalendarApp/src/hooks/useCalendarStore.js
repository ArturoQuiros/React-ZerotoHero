import { useDispatch, useSelector } from "react-redux";
import calendarApi from "../api/calendarApi";
import { convertEventToDate } from "../helpers";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
  onLoadEvents,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //go to backend

    if (calendarEvent._id) {
      //update
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //create
      const { data } = await calendarApi.post("/events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };

  const startDeleteEvent = () => {
    dispatch(onDeleteEvent());
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const events = convertEventToDate(data.events);

      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //props
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    //methods
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
    startLoadingEvents,
  };
};
