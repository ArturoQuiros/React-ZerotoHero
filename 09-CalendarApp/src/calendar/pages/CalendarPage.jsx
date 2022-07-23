import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { NavBar, CalendarEvent, CalendarModal } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";

const events = [
  {
    title: "Cumpleaños",
    notes: "buy a cake",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgcolor: "fafafa",
    user: {
      _id: "123",
      name: "Arturo",
    },
  },
];

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

  const onDobleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChange = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(lastView);
  };

  return (
    <>
      <NavBar />
      <Calendar
        components={{ event: CalendarEvent }}
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
