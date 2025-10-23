"use client";

import useCounter from "@/hooks/useCounter";

function UseCustomHookPage() {
  const { count, handleDecrement, handleIncrement } = useCounter();

  return (
    <div>
      <h1>UseCustomHookPage</h1>

      <button onClick={handleDecrement}>decrement</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}

export default UseCustomHookPage;
