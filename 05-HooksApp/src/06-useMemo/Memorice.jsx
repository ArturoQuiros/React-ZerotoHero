import React from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorice = () => {
  const { counter, increment } = useCounter(10);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={() => increment()}>
        Increment
      </button>
    </>
  );
};
