"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/stores/auth";
import Link from "next/link";

const Home = () => {
  const { user, clearAuth } = useAuth();

  return (
    <div className="h-screen flex justify-center items-center">
      {!user ? (
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Please Sign In</h1>
          <Link href="/sign-in">
            <Button className="w-full" variant="outline">
              Sign In
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p>{user.email}</p>
          <Button className="w-full" variant="outline" onClick={clearAuth}>
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
