"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/stores/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const { user, onAuthSuccess } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log("ini isi global state user", user);

  const handleSignIn = () => {
    if (!email || !password) {
      return alert("email or password cannot be empty!");
    }

    onAuthSuccess({ user: { email: email } });
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-lg border border-black p-8 space-y-8 rounded-xl">
        <h1 className="text-center text-2xl">Sign In Page</h1>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end">
          <Button onClick={handleSignIn}>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
