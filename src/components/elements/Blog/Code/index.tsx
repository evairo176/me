import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import diff from "react-syntax-highlighter/dist/cjs/languages/prism/diff";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";
import cmd from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { a11yDark as themeColor } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useCopyToClipboard } from "usehooks-ts";

const languages = {
  javascript: "javascript",
  typescript: "typescript",
  diff: "diff",
  tsx: "tsx",
  css: "css",
  php: "php",
  cmd: "cmd",
};

SyntaxHighlighter.registerLanguage(languages.javascript, javascript);
SyntaxHighlighter.registerLanguage(languages.typescript, typescript);
SyntaxHighlighter.registerLanguage(languages.diff, diff);
SyntaxHighlighter.registerLanguage(languages.tsx, tsx);
SyntaxHighlighter.registerLanguage(languages.css, css);
SyntaxHighlighter.registerLanguage(languages.php, php);
SyntaxHighlighter.registerLanguage(languages.cmd, cmd);

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
  console.log(className?.replace(/(?:lang(?:uage)?-)/, ""));
  return (
    <div className="not-prose relative">
      <button
        className="not-prose absolute z-[10] top-1.5 right-3 p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800"
        type="button"
        aria-label="Copy to Clipboard"
        onClick={() => handleCopy(children.toString())}
        data-umami-event="Click Copy Code"
      >
        {!isCopied ? (
          <CopyIcon size={18} className="not-prose text-neutral-400" />
        ) : (
          <CheckIcon size={18} className="not-prose text-green-600" />
        )}
      </button>

      <SyntaxHighlighter
        language={className?.replace(/(?:lang(?:uage)?-)/, "")}
        style={themeColor}
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
