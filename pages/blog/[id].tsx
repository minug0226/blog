import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Test from "@components/Test";
import Paragraph from "@components/Paragraph";
import { readdirSync } from "fs";
import matter from "gray-matter";
import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IPostDetailProps {
  mdxContent: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
  Test,
  Paragraph,
};

const PostDetail: NextPage<IPostDetailProps> = ({
  mdxContent,
}: IPostDetailProps) => {
  return (
    <div className="prose">
      <MDXRemote {...mdxContent} components={components} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileList = readdirSync("./posts").map((fileName) => {
    const fileNameRoute = fileName.replace(".mdx", "");
    return { params: { id: fileNameRoute } };
  });

  return {
    paths: fileList,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { content } = matter.read(`./posts/${context?.params?.id}.mdx`);
  const mdxContent = await serialize(content);
  console.log(mdxContent);
  return {
    props: {
      mdxContent,
    },
  };
};

export default PostDetail;
