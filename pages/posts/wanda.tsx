import { IPosts } from "@type/posts";
import { GetStaticProps, NextPage } from "next";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import PostList from "@components/PostList";

const Wanda: NextPage<IPosts> = ({ posts }: IPosts) => {
  return (
    <div className="mx-auto max-w-[1080px] pt-[60px] pb-4">
      <div className="mb-9 px-4">
        <div className="text-[32px] font-bold leading-[45px] text-black">
          👊 Hulk
        </div>
        <div className="text-xl font-bold leading-[42px] text-black">
          코딩을 부셔버리겠습니다.
        </div>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postList = readdirSync("./posts").map((fileName) => {
    const info = readFileSync(`./posts/${fileName}`, "utf-8");
    const { data } = matter(info);

    if (data.author === "wanda") return data;
    else return null;
  });

  const posts = postList.filter((post) => post !== null);

  return {
    props: { posts },
  };
};

export default Wanda;
