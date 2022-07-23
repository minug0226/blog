import { IPosts } from "@type/posts";
import type { GetStaticProps, NextPage } from "next";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";

const Blog: NextPage<IPosts> = ({ posts }: IPosts) => {
  return (
    <>
      {posts?.map((post, i) => {
        return (
          <div key={i}>
            <div>{post?.title}</div>
            <div>{post?.date}</div>
          </div>
        );
      })}
    </>
  );
};

export const getStaticPropsry: GetStaticProps = async () => {
  const posts = readdirSync("./posts").map((fileName) => {
    const info = readFileSync(`./posts/${fileName}`, "utf-8");
    const { data } = matter(info);
    return data;
  });

  return {
    props: { posts },
  };
};

export default Blog;
