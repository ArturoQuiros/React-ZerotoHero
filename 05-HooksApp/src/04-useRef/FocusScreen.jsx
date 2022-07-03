import React from "react";
import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const onClick = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr></hr>
      <input ref={inputRef} type="text" placeholder="Input #1"></input>
      <input type="text" placeholder="Input #2"></input>
      <input type="text" placeholder="Input #3"></input>

      <button onClick={onClick} className="btn btn-primary">
        Set Focus
      </button>
    </>
  );
};
