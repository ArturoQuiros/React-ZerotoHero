import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours, format, parse, startOfWeek, getDay } from "date-fns";

import enUS from "date-fns/locale/en-US";

import { NavBar } from "../";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

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
  return (
    <>
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
      />
    </>
  );
};
