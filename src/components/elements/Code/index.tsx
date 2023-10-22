import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BiCopyAlt } from "react-icons/bi";
import { Button } from "@/components/ui/button";

type CodeProps = {
  children: string;
  language: string;
};

const Code = ({ children, language }: CodeProps) => {
  const [copy, setCope] = useState<boolean>(false);
  console.log(language);
  return (
    <div className="rounded-md border bg-gray-500">
      <div className="flex justify-between items-center p-2 ">
        <div className="text-sm text-white">Example Code</div>
        <Button variant={"ghost"} className="group">
          <BiCopyAlt className="text-white w-5 h-5 group-hover:text-gray-500" />
        </Button>
      </div>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
