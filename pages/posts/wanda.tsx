import { IPosts } from "@type/posts";
import { GetStaticProps, NextPage } from "next";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import PostList from "@components/PostList";

const Wanda: NextPage<IPosts> = ({ posts }: IPosts) => {
  return (
    <>
      <PostList posts={posts} />
    </>
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
