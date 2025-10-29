"use client";

import { useCounter } from "@/stores/useCounter";
import Link from "next/link";

const GlobalState1 = () => {
  const { count, decrement, increment } = useCounter();

  return (
    <div>
      <h1>GlobalState1</h1>

      <hr />

      <button onClick={decrement}>decrement</button>
      <p>{count}</p>
      <button onClick={increment}>increment</button>

      <hr />

      <Link href="/global-state-2">Halaman Global State 2</Link>
    </div>
  );
};

export default GlobalState1;
