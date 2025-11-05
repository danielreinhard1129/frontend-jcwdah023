"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Blog } from "@/types/blog";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBlogs = async () => {
    try {
      const result = await axios.get(
        "https://betterkiss-us.backendless.app/api/data/Blogs",
      );
      setBlogs(result.data);
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
    <div className="container mx-auto grid grid-cols-3 gap-8 p-4">
      {isLoading && (
        <div className="col-span-3 my-16 text-center">
          <p className="text-2xl font-bold">Loading...</p>
        </div>
      )}

      {blogs.map((blog) => {
        return <BlogCard key={blog.objectId} blog={blog} />;
      })}
    </div>
  );
};

export default BlogList;
