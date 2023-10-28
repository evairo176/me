import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BiCopyAlt } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { Button } from "@/components/ui/button";

type CodeProps = {
  children: string;
  language: string;
};

const Code = ({ children, language }: CodeProps) => {
  const [copy, setCopy] = useState<boolean>(false);

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
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
