import { IPosts } from "@type/posts";
import CarouselSlide from "@components/CarouselSlide";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import type { GetStaticProps, NextPage } from "next";
import PostList from "../components/PostList"; // strange 고침 PostList => postList

const Home: NextPage<IPosts> = ({ posts }: IPosts) => {
  return (
    <>
      <CarouselSlide />
      <div className="pt-[48px] pb-5 text-center text-[18px] font-bold leading-[42px] text-[#303030]">
        최신글
      </div>
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = readdirSync("./posts").map((fileName) => {
    const info = readFileSync(`./posts/${fileName}`, "utf-8");

    const { data } = matter(info);
    return data;
  });

  return {
    props: { posts },
  };
};

export default Home;
