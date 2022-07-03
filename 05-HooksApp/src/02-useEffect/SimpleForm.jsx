import React from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "admin",
    email: "admin@admin.com",
  });

  const { username, email } = formState;

  const HandleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Formulario</h1>
      <hr></hr>
      <input
        type="text"
        className="form-Control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={HandleInputChange}
      ></input>
      <input
        type="email"
        className="form-Control mt-2"
        placeholder="email@example.com"
        name="email"
        value={email}
        onChange={HandleInputChange}
      ></input>
      {username === "admin" && <Message />}
    </>
  );
};
