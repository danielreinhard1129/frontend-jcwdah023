"use client";

import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const OnClientThirdParty = () => {
  const { data: users, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return users.data;
    },
  });

  return (
    <div>
      <h1>OnClientThirdParty</h1>

      {isPending && <p>Loading...</p>}

      {users?.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default OnClientThirdParty;

// useQuery -> get
// useMutation -> post, patch, delete
