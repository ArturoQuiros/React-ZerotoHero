import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../03-samples/Loading";
import { Quote } from "../03-samples/Quote";

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data, isLoading, hasError } = useFetch(url);
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <Quote author={author} quote={quote} />
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
