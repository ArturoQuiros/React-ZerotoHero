import React from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { NotFound } from "./NotFound";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar />
      <hr></hr>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </UserProvider>
  );
};
