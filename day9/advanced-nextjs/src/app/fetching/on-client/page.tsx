"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const OnClientExample = () => {
  const [email, setEmail] = useState<string>("");

  const getRandomUser = async () => {
    try {
      const randomUser = await axios.get("https://randomuser.me/api/");
      setEmail(randomUser.data.results[0].email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <div>
      <h1>OnClientExample</h1>
      <p>{email}</p>
    </div>
  );
};

export default OnClientExample;
