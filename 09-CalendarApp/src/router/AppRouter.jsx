import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";

export const AppRouter = () => {
  const auth = "not-auth";
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<LoginPage />} />
        <Route path="/*" element={<CalendarPage />} />
      </Routes>
    </>
  );
};
