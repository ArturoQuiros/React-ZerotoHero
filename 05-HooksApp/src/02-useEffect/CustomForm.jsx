import React from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const CustomForm = () => {
  const { username, email, password, HandleInputChange } = useForm({
    username: "admin",
    email: "admin@admin.com",
    password: "",
  });

  return (
    <>
      <h1>Formulario con useForm</h1>
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
      <input
        type="password"
        className="form-Control mt-2"
        placeholder="your password"
        name="password"
        value={password}
        onChange={HandleInputChange}
      ></input>
    </>
  );
};
