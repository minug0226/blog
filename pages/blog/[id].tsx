import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Test from "@components/Test";
import Paragraph from "@components/Paragraph";

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

  // [test-hulk-01, test-hulk-02, ....]
  // 참치마요. 화장실 상세페이지.
  // 상세페이지로 접근하기 위해서.. 화장실 ID  /toilets/1  toilets/7 query === db에 있는 정보.
  // 그때그때 db에 있는 id로 해당 페이지의 정보를 불러왔다.

  // db가 없다. 미리 html 파일을 만들어놓는다.
  // [id] --> 알 수가없다. 미리 페이지를 만들어야 되는데... 도대체 저 id가 몇개인지 모른다.
  // 그래서 페이지를 미리 몇개를 준비해야 되는지 모른다.
  // [id]  --> id는 00이 될거고 총 몇개가 될거야.

  return {
    paths: fileList, // [test-hulk-01, test-hulk-02, ....]
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
