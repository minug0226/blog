import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Test from "@components/Test";
import Paragraph from "@components/Paragraph";
import { IPost } from "@type/posts";
import PostTopSection from "@components/post/PostTopSection";
import PostBottomSection from "@components/post/PostBottomSection";

interface IPostDetailProps {
  mdxContent: MDXRemoteSerializeResult<Record<string, unknown>>;
  data: IPost;
}

const components = {
  Test,
  Paragraph,
};

const PostDetail: NextPage<IPostDetailProps> = ({
  mdxContent,
  data,
}: IPostDetailProps) => {
  return (
    <>
      <PostTopSection data={data} />
      <div className="mx-auto mb-12 max-w-[1080px] px-4 md:px-0">
        <div className="prose">
          <MDXRemote {...mdxContent} components={components} />
        </div>
      </div>
      <PostBottomSection />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileList = readdirSync("./posts").map((fileName) => {
    const fileNameRoute = fileName.replace(".mdx", "");
    return { params: { slug: fileNameRoute } };
  });

  return {
    paths: fileList,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data, content } = matter.read(`./posts/${context?.params?.slug}.mdx`);
  const mdxContent = await serialize(content);

  return {
    props: {
      mdxContent,
      data,
    },
  };
};

export default PostDetail;
