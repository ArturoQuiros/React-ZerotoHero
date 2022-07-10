import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

export const LoginPage = () => {
  const Navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Arturo Quiros");
    Navigate(lastPath, { replace: true });
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr></hr>
        <button onClick={onLogin} className="btn btn-primary">
          Login
        </button>
      </div>
    </>
  );
};
