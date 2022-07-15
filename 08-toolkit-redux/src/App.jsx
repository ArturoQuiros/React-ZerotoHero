import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  IncrementByAmount,
} from "./store/slices/counter/counterSlice";

import "./App.css";

function App() {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: {counter}</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            +1
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            -1
          </button>
          <button type="button" onClick={() => dispatch(IncrementByAmount(2))}>
            +2
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
