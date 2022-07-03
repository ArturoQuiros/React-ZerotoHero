import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <h4>{JSON.stringify(coords)}</h4>
    </>
  );
};
