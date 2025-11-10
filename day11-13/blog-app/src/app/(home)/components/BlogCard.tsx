import { Blog } from "@/types/blog";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = (props: BlogCardProps) => {
  return (
    <Link href={`/articles/${props.blog.objectId}`}>
      <div className="space-y-2 rounded-xl border p-8">
        <Image
          src={props.blog.thumbnail}
          alt="thumbnail"
          width={500}
          height={300}
        />
        <p className="w-fit rounded-sm bg-green-200 px-4 text-sm text-black">
          {props.blog.category}
        </p>
        <h2 className="line-clamp-2 text-xl font-bold">{props.blog.title}</h2>
        <p className="text-xs">
          {format(new Date(props.blog.created), "dd MMM yyyy")} -{" "}
          {props.blog.author}
        </p>
        <p className="line-clamp-3">{props.blog.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
