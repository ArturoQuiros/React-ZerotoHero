import React from "react";
import { HeroeList } from "../components";

export const DcPage = () => {
  return (
    <>
      <h1>DC Heroes</h1>
      <hr></hr>
      <HeroeList Publisher="DC Comics" />
    </>
  );
};
