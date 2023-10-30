import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/elements/CodeBlock";

type BlogBodyProps = {
  body: string;
};

interface TableProps {
  children: React.ReactNode;
}

const Table = ({ children }: TableProps) => {
  return (
    <div className="table-container">
      <table className="table w-full">{children}</table>
    </div>
  );
};

const BlogBody = ({ body = "" }: BlogBodyProps) => {
  return (
    <div className="text-rich">
      <ReactMarkdown
        components={{
          a: (props) => (
            <a
              className="text-teal-600 hover:text-teal-400 hover:underline cursor-pointer"
              target="_blank"
              {...props}
            />
          ),
          p: (props) => <div {...props} />,
          h2: (props) => (
            <h2
              className="text-xl font-medium dark:text-neutral-300"
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className="text-[18px] leading-snug pt-4 font-medium dark:text-neutral-300"
              {...props}
            />
          ),
          ul: (props) => (
            <ul className="pl-10 space-y-3 list-disc pb-5" {...props} />
          ),
          ol: (props) => (
            <ol className="pl-10 space-y-3 list-decimal pb-5" {...props} />
          ),
          code: (props) => <CodeBlock {...props} />,
          blockquote: (props) => (
            <blockquote
              className="pl-6 py-3 text-md border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-cyan-800 dark:text-cyan-200"
              {...props}
            />
          ),
          table: (props) => <Table {...(props as TableProps)} />,
          th: (props) => (
            <th className="border dark:border-neutral-600 py-1 px-3 text-left">
              {props.children}
            </th>
          ),
          td: (props) => (
            <td className="border dark:border-neutral-600  py-1 px-3">
              {props.children}
            </td>
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
};

export default BlogBody;
