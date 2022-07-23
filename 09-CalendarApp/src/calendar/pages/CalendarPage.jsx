import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { NavBar, CalendarEvent, CalendarModal } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUiStore, useCalendarStore } from "../../hooks";

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "347CF7",
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
  const { events, setActiveEvent } = useCalendarStore();

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
    </>
  );
};
