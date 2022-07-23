import Link from "next/link";
import { IPostItemProps } from "@type/posts";

const PostItem = ({ post }: IPostItemProps) => {
  return (
    <div className="w-full">
      <div className="mb-3 aspect-thumbnail w-full bg-[#D9D9D9]">
        <img src={post.thumbnail} alt="" />
      </div>
      <div className="mb-2 font-normal leading-[26px] text-[#303030]">
        {post.category}
      </div>
      <div className="mb-2 h-[42px] overflow-hidden truncate text-xl font-bold leading-[42px]">
        {post.title}
      </div>
      <div className="line-clamp3 mb-3 h-[78px] w-full font-normal leading-[26px] tracking-[-0.03em] text-[#525252]">
        {post.content}
      </div>
      <div className="flex justify-between">
        <div className="leading-[26px] text-[#8C8C8C]">{post.date}</div>
        <Link href={`/posts/${post.author}`}>
          <a className="leading-[26px] text-[#0C9A00]">{post.author}</a>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
