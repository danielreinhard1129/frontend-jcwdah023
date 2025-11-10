"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const session = useSession();

  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <p className="text-2xl font-bold">Food Ninja</p>

      <div className="flex items-center gap-4">
        <Link href="/">Blog</Link>
        <Link href="/write">Write</Link>

        {session.status === "unauthenticated" ? (
          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
        ) : (
          <Button variant="destructive" onClick={() => signOut()}>
            Sign Out
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
