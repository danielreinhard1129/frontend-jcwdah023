import Navbar from "@/components/Navbar";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import { cache } from "react";

interface ArticleDetailProps {
  params: Promise<{ objectId: string }>;
}

const getBlog = cache(async (objectId: string) => {
  const response = await fetch(
    `https://betterkiss-us.backendless.app/api/data/Blogs/${objectId}`,
  );
  const blog: Blog = await response.json();
  return blog;
});

export const generateMetadata = async (props: ArticleDetailProps) => {
  const { objectId } = await props.params;
  const blog = await getBlog(objectId);

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: blog.thumbnail,
    },
  };
};

const ArticleDetail = async (props: ArticleDetailProps) => {
  const { objectId } = await props.params;
  const blog = await getBlog(objectId);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto max-w-6xl space-y-2">
        <p className="w-fit rounded-sm bg-green-200 px-4 text-sm text-black">
          {blog.category}
        </p>
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="font-light">
          {format(new Date(blog.created), "dd MMM yyyy")} - {blog.author}
        </p>
        <div className="relative h-[260px] w-full overflow-hidden rounded-xl">
          <Image
            src={blog.thumbnail}
            alt="thumbnail"
            className="object-cover"
            fill
          />
        </div>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;
