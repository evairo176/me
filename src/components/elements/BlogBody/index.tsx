import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/elements/CodeBlock";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";
import { Code, Pre } from "../Blog/Code";

type BlogBodyProps = {
  body: string;
};

const BlogBody = ({ body = "" }: BlogBodyProps) => {
  const options = { code: Code, pre: Pre };
  return (
    <article className="prose prose-pre:p-0 max-w-none dark:prose-invert prose-sm">
      <Markdown
        components={options}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSanitize,
          [rehypeExternalLinks, { content: { type: "text", value: "🔗" } }],
        ]}
      >
        {body}
      </Markdown>
    </article>
  );
};

export default BlogBody;
