import React from "react";
import { getHeroesByPublisher } from "../helpers";

export const HeroeList = ({ Publisher }) => {
  const heroes = getHeroesByPublisher(Publisher);

  return (
    <>
      <ul>
        {heroes.map((heroe) => (
          <li key={heroe.id}>{heroe.superhero}</li>
        ))}
      </ul>
    </>
  );
};
