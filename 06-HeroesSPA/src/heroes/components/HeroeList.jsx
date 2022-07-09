import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroeCard } from "./HeroeCard";
export const HeroeList = ({ Publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(Publisher), [Publisher]);
  return (
    <>
      <div className=" rows-cols-1 row-cols-md-3 g-3">
        {heroes.map((heroe) => (
          <HeroeCard key={heroe.id} {...heroe} />
        ))}
      </div>
    </>
  );
};
