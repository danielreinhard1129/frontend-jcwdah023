"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>

      <Link href="/static">Halaman static</Link>

      <button onClick={() => router.push("/dynamic")}>Halaman dynamic</button>
    </div>
  );
};

export default Home;
