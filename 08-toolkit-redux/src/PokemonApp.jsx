import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, startLoadingPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingPokemons());
    const pokemons = dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr></hr>
      <span>loading: {isLoading ? "TRUE" : "FALSE"} </span>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}> {pokemon.name} </li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page + 1))}
      >
        NEXT
      </button>
    </>
  );
};
