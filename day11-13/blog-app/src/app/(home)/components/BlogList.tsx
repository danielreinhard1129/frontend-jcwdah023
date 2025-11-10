"use client";

import BlogCard from "./BlogCard";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

const BlogList = () => {
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const users = await axiosInstance.get<Blog[]>(
        "/api/data/Blogs?sortBy=%60created%60%20desc",
      );
      return users.data;
    },
  });

  return (
    <div className="container mx-auto grid grid-cols-3 gap-8 p-4">
      {isPending && (
        <div className="col-span-3 my-16 text-center">
          <p className="text-2xl font-bold">Loading...</p>
        </div>
      )}

      {blogs?.map((blog) => {
        return <BlogCard key={blog.objectId} blog={blog} />;
      })}
    </div>
  );
};

export default BlogList;
