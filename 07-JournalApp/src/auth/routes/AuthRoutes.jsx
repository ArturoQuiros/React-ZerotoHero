import { Route, Routes } from "react-router-dom";
import { loginPage, registerPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<loginPage />} />
      <Route path="register" element={<registerPage />} />

      <Route path="register" element={<registerPage />} />
    </Routes>
  );
};
