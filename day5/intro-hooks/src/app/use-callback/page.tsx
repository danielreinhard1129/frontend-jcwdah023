"use client";

import { memo, useCallback, useState } from "react";

function UseCallbackPage() {
  const [count, setCount] = useState<number>(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1>UseCallbackPage</h1>

      <p>{count}</p>
      <ChildComponent handleClick={increment} />

      <hr />

      <p>{theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

export default UseCallbackPage;

interface ChildComponentProps {
  handleClick: () => void;
}

const ChildComponent = memo((props: ChildComponentProps) => {
  console.log("CHILD RENDER");
  return (
    <div>
      <button onClick={props.handleClick}>Increment</button>
    </div>
  );
});
