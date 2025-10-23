"use client";

import { useRef } from "react";

function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!inputRef.current?.value) {
      return alert("input tidak boleh kosong!");
    }

    alert(inputRef.current.value);
  };

  return (
    <div>
      <h1>UseRefPage</h1>

      <input type="text" className="border" ref={inputRef} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default UseRefPage;
