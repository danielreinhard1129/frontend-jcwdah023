"use client";

import { useAuth } from "@/stores/auth";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const { user, clearAuth } = useAuth();

  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <p className="text-2xl font-bold">Food Ninja</p>

      <div className="flex items-center gap-4">
        <Link href="/">Blog</Link>
        <Link href="/write">Write</Link>

        {!user ? (
          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
        ) : (
          <Button variant="destructive" onClick={clearAuth}>
            Sign Out
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
