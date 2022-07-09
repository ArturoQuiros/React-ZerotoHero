import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPusblishers = ["DC Comics", "Marvel Comics"];

  if (!validPusblishers.includes(publisher)) {
    console.log(`${publisher} is not a valid publisher`);
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
