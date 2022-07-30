import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { NavBar, CalendarModal, FabAddNew, FabDelete } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useEffect, useState } from "react";
import { useUiStore, useCalendarStore, useAuthStore } from "../../hooks";

export const CalendarPage = () => {
  const { user } = useAuthStore();
  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent =
      user.uid === event.user._id || user.uid === event.user.uid;

    const style = {
      backgroundColor: isMyEvent ? "347CF7" : "455660",
      borderRadius: "0px",
      opacity: "0.8",
      color: "white",
    };

    return { style };
  };

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const { openModal, closeModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const onDobleClick = (event) => {
    openModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChange = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(lastView);
  };

  //-------------get events--------
  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      <NavBar />
      <Calendar
        //components={{ event: events }}
        culture="es"
        messages={getMessagesES()}
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal></CalendarModal>
      <FabAddNew></FabAddNew>
      <FabDelete></FabDelete>
    </>
  );
};
