import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./01-useState/CounterApp";
import { CustomCounterApp } from "./01-useState/CustomCounterApp";
import { CustomForm } from "./02-useEffect/CustomForm";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-samples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/layout";
import { MemoHook } from "./06-useMemo/MemoHook";
import { Memorice } from "./06-useMemo/Memorice";
import HooksApp from "./HooksApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MemoHook />
  </React.StrictMode>
);
