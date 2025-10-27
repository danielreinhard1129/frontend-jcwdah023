"use client";

import { Blog } from "@/types/blog";
import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBlogs = async () => {
    try {
      const url = "https://betterkiss-us.backendless.app/api/data/Blogs";
      const response = await fetch(url);
      const result = await response.json();
      setBlogs(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <h1>Home</h1>

      {isLoading ? <p>Loading...</p> : null}

      {blogs.map((blog) => {
        return <p key={blog.objectId}>{blog.title}</p>;
      })}
    </div>
  );
};

export default Home;

// rafce
// rfc
