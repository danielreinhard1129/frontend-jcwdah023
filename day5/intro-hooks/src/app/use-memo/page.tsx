"use client";

import { useMemo, useState } from "react";

function UseMemoPage() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const isNumberEven = useMemo(() => {
    let i = 0;

    while (i < 900_000_000) {
      i++;
    }

    return number % 2 === 0;
  }, [number]);

  return (
    <div>
      <h1>UseMemoPage</h1>

      <p>{isNumberEven}</p>

      <hr />

      <p>{number}</p>
      <button onClick={incrementNumber}>increment number</button>

      <hr />

      <p>{count}</p>
      <button onClick={incrementCount}>increment count</button>
    </div>
  );
}

export default UseMemoPage;
