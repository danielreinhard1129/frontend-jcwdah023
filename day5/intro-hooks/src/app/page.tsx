"use client";

import useCounter from "@/hooks/useCounter";

function Home() {
  const { count, handleDecrement, handleIncrement } = useCounter();

  return (
    <div>
      <h1>Home</h1>

      <button onClick={handleDecrement}>decrement</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}

export default Home;
