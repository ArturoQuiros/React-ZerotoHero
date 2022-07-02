import { useCounter } from "../hooks/useCounter";

export const CustomCounterApp = () => {
  const { counter, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <h1>Count: {counter} </h1>
      <hr></hr>
      <button onClick={() => increment(3)}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => decrement(2)}>Decrement</button>
    </>
  );
};
