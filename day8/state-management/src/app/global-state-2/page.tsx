"use client";

import { useCounter } from "@/stores/useCounter";
import Link from "next/link";

const GlobalState2 = () => {
  const { count, decrement, increment } = useCounter();
  return (
    <div>
      <h1>GlobalState2</h1>

      <hr />

      <button onClick={decrement}>decrement</button>
      <p>{count}</p>
      <button onClick={increment}>increment</button>

      <hr />

      <Link href="/global-state-1">Halaman Global State 1</Link>
    </div>
  );
};

export default GlobalState2;
