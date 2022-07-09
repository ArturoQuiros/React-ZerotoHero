import React from "react";
import { HeroeList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Heroes</h1>
      <hr></hr>
      <HeroeList Publisher="Marvel Comics" />
    </>
  );
};
