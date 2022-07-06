import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LogIn</h1>
      <hr></hr>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 1, name: "Arturo Quiros", email: "hello@example.com" })
        }
      >
        Log In
      </button>
    </>
  );
};
