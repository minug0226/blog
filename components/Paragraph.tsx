import { IParagraphProps } from "@type/mdx";

const Paragraph = ({ children }: IParagraphProps) => {
  return <p>{children}</p>;
};

export default Paragraph;
