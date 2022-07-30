import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "cheking") {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <Routes>
        {status !== "auth" ? (
          <Route path="/auth/*" element={<LoginPage />} />
        ) : (
          <Route path="/*" element={<CalendarPage />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
