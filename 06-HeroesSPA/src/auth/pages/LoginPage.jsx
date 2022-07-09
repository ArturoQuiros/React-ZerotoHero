import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const Navigate = useNavigate();

  const onLogin = () => {
    Navigate("/marvel", { replace: true });
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
