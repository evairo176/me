import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {};

export const Code = ({ className = "", children, ...props }: any) => {
  // Inline code
  if (!className?.includes("language" || "language")) {
    return (
      <code className="bg-gray-700 text-gray-300 rounded-md px-1">
        {children}
      </code>
    );
  }

  return (
    <SyntaxHighlighter
      language={className?.replace(/(?:lang(?:uage)?-)/, "")}
      style={materialOceanic}
      wrapLines={true}
      className="not-prose rounded-md"
    >
      {children}
    </SyntaxHighlighter>
  );
};

export const Pre = ({ ...props }) => {
  return <div className="not-prose">{props.children}</div>;
};
