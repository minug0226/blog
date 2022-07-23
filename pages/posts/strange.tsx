import PostList from "@components/PostList";
import { IPosts } from "@type/posts";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";

const Stragne: NextPage<IPosts> = ({ posts }: IPosts) => {
  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postList = readdirSync("./posts").map((filename) => {
    const info = readFileSync(`./posts/${filename}`, "utf-8");
    const { data } = matter(info);

    if (data.author === "strange") return data;
    else return null;
  });
  const posts = postList.filter((post) => post !== null);
  return {
    props: {
      posts,
    },
  };
};

export default Stragne;
