"use client";

import { useEffect, useState } from "react";

function UseEffectPage() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  // mode 1: bakalan run setiap ada perubahan terhadap state/props
  useEffect(() => {
    console.log("use effect dijalankan mode 1");
  });

  // mode 2: bakalan run sekali saja saat react first render
  useEffect(() => {
    console.log("use effect dijalankan mode 2");
  }, []);

  // mode 3: sama seperti mode 2, tapi kalo ada perubahan di dependency akan dijalankan ulang.
  useEffect(() => {
    console.log("use effect dijalankan mode 3");
  }, [count]);

  return (
    <div>
      <h1>UseEffectPage</h1>

      <p>{number}</p>
      <button onClick={incrementNumber}>increment number</button>

      <hr />

      <p>{count}</p>
      <button onClick={incrementCount}>increment count</button>
    </div>
  );
}

export default UseEffectPage;
