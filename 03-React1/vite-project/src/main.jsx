import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
import FirstApp from "./FirstApp";
import HelloWorldApp from "./HelloWorldApp";

function App() {
  return <h1>Hola mundo!</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp name2="Arturo" />
    <CounterApp value={8} />
  </React.StrictMode>
);
