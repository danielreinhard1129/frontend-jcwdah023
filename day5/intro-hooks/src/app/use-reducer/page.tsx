"use client";

import { useReducer } from "react";

interface CountState {
  count: number;
}

interface CountAction {
  type: "increment" | "decrement";
  payload: number;
}

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return { count: state.count };
  }
}

function UseReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: 1 });
  };

  return (
    <div>
      <h1>UseReducerPage</h1>

      <button onClick={handleDecrement}>decrement</button>
      <p>{state.count}</p>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}

export default UseReducerPage;
