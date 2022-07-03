import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data, isLoading, hasError } = useFetch(url);
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Next Quote
      </button>
      <button
        className="btn btn-primary"
        disabled={counter === 1}
        onClick={() => decrement(1)}
      >
        Previous Quote
      </button>
    </>
  );
};
