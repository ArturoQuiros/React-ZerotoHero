import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./store/";
import { Provider } from "react-redux";
import { PokemonApp } from "./PokemonApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);
