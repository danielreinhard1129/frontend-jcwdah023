"use client";

import { oswald } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className={`${oswald.className}`}>Home</h1>

      <Link href="/static">Halaman static</Link>

      <button onClick={() => router.push("/dynamic")}>Halaman dynamic</button>

      {/* <img src="/thumbnail.avif" alt="thumbnail" width="100%" height="100%" /> */}

      {/* <Image src="/thumbnail.avif" alt="thumbnail" width={400} height={300} /> */}

      <Image
        src="https://images.unsplash.com/photo-1760376448199-5924d569919e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1468"
        alt="thumbnail"
        width={400}
        height={300}
      />
    </div>
  );
};

export default Home;
