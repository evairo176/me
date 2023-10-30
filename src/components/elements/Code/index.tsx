import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BiCopyAlt } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import diff from "react-syntax-highlighter/dist/esm/languages/hljs/diff";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";

type CodeProps = {
  children: string;
  language: string;
};

const languages = {
  javascript: "javascript",
  typescript: "typescript",
  diff: "diff",
  tsx: "tsx",
  css: "css",
};

// SyntaxHighlighter.registerLanguage(languages.javascript, javascript);
// SyntaxHighlighter.registerLanguage(languages.typescript, typescript);
// SyntaxHighlighter.registerLanguage(languages.diff, diff);
// SyntaxHighlighter.registerLanguage(languages.tsx, tsx);
// SyntaxHighlighter.registerLanguage(languages.css, css);

const Code = ({ children, language }: CodeProps) => {
  const [copy, setCopy] = useState<boolean>(false);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="rounded-md border bg-gray-500">
      <div className="flex justify-between items-center py-1 px-[12px]">
        <div className="text-xs text-white">Example</div>
        {copy ? (
          <Button disabled={true} variant={"ghost"} className="group">
            <BsCheck2Circle className="text-white w-5 h-5 group-hover:text-gray-500" />
          </Button>
        ) : (
          <Button
            onClick={() => {
              navigator.clipboard.writeText(children);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
            variant={"ghost"}
            className="group"
          >
            <BiCopyAlt className="text-white w-5 h-5 group-hover:text-gray-500" />
          </Button>
        )}
      </div>
      <SyntaxHighlighter
        language={language ? language : "javascript"}
        style={currentTheme === "dark" ? atomOneDark : atomOneLight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
