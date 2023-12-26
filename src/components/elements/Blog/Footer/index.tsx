import { useState } from "react";
import { FaInfo } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  data: {
    lines: number;
    words: number;
    characters: number;
  };
};

const Footer = ({ data }: Props) => {
  return (
    <div className="bg-muted text-muted-foreground border border-border p-2  w-full flex justify-between">
      <div className="text-sm font-semibold flex space-x-3">
        <span>Lines: {data.lines}</span>
        <span>Chars: {data.characters}</span>
        <span>Words: {data.words}</span>
      </div>
    </div>
  );
};

export default Footer;
