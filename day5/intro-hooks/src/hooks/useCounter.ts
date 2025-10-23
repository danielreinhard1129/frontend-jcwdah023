import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState<number>(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return { count, handleDecrement, handleIncrement };
}

export default useCounter;
