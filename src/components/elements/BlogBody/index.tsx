import parse, { Element, domToReact } from "html-react-parser";
import Image from "next/image";
import Code from "../Code";

type BlogBodyProps = {
  body: string;
};

const BlogBody = ({ body = "" }: BlogBodyProps) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;
          return (
            <Image
              className="my-3 h-auto max-h-[300px] w-full rounded-md object-cover object-center md:max-h-[500px]"
              src={src}
              alt={alt}
              width={1200}
              height={620}
            />
          );
        }

        if (
          domNode.type === "tag" &&
          domNode.name === "pre" &&
          domNode.children
        ) {
          const codeNode: any = domNode.children.find(
            (child: any) => child.name === "span"
          );

          if (codeNode && codeNode.children && codeNode.children.length === 1) {
            const codeContent = codeNode.children[0].data;
            const language = codeNode.attribs.class || ""; // You can modify this to extract the language class

            return <Code language={language}>{codeContent}</Code>;
          }
        }
        if (
          domNode.type === "tag" &&
          domNode.name === "blockquote" &&
          domNode.children
        ) {
          const codeNode: any = domNode.children.find(
            (child: any) => child.name === "span"
          );
          console.log({ codeNode });
          if (codeNode && codeNode.children && codeNode.children.length === 1) {
            const blockquoteContent = codeNode.children[0].data;
            const language = codeNode.attribs.class || ""; // You can modify this to extract the language class

            return (
              <blockquote className="border-l-2 border-primary p-2 bg-muted text-sm text-justify">
                {blockquoteContent}
              </blockquote>
            );
          }
        }
      }
    },
  };

  const getParseHtml = (body: string) => {
    return parse(body, options);
  };

  return <div className="rich-text">{getParseHtml(body)}</div>;
};

export default BlogBody;
