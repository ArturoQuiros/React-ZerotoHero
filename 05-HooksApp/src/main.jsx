import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./01-useState/CounterApp";
import { CustomCounterApp } from "./01-useState/CustomCounterApp";
import HooksApp from "./HooksApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomCounterApp />
  </React.StrictMode>
);
