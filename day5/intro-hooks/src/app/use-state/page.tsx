"use client";

import { useState } from "react";

function UseStatePage() {
  const [name, setName] = useState<string>("siti");

  const changeName = () => {
    setName("budi");
  };

  let orang = "jack";

  const changeOrang = () => {
    orang = "udin";
  };

  return (
    <div>
      <h1>UseStatePage</h1>

      <p>{name}</p>
      <button onClick={changeName}>update</button>

      <p>{orang}</p>
      <button onClick={changeOrang}>update</button>
    </div>
  );
}

export default UseStatePage;
