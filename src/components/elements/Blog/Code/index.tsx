import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useCopyToClipboard } from "usehooks-ts";

type Props = {};

export const Code = ({ className = "", children, ...props }: any) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [value, copy] = useCopyToClipboard();

  const handleCopy = (code: string) => {
    copy(code);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);
  // Inline code
  if (!className?.includes("language" || "language")) {
    return (
      <code className="bg-gray-700 text-gray-300 rounded-md px-1">
        {children}
      </code>
    );
  }

  return (
    <div className="relative ">
      <button
        className="absolute z-[10] top-3 right-3 p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800"
        type="button"
        aria-label="Copy to Clipboard"
        onClick={() => handleCopy(children.toString())}
        data-umami-event="Click Copy Code"
      >
        {!isCopied ? (
          <CopyIcon size={18} className="text-neutral-400" />
        ) : (
          <CheckIcon size={18} className="text-green-600" />
        )}
      </button>

      <SyntaxHighlighter
        language={className?.replace(/(?:lang(?:uage)?-)/, "")}
        style={materialOceanic}
        wrapLines={true}
        className="not-prose rounded-md"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export const Pre = ({ ...props }) => {
  return <div className="not-prose">{props.children}</div>;
};
