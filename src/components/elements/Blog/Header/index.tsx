import { Button } from "@/components/ui/button";
import {
  AtSymbolIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import {
  BoldIcon,
  CodeIcon,
  DotIcon,
  ImageIcon,
  ItalicIcon,
  LanguagesIcon,
  RedoIcon,
  StrikethroughIcon,
  UndoIcon,
} from "lucide-react";
import React from "react";

const Header = ({
  feedElement,
  selectedIndex,
  handleUndo,
  handleRedo,
  currentIndex,
  history,
}: {
  feedElement: (syntax: string) => void;
  selectedIndex: number;
  handleUndo: () => void;
  handleRedo: () => void;
  currentIndex: number;
  history: string[];
}) => {
  const btns = [
    { name: <UndoIcon className="w-4 h-4" />, syntax: "", type: "undo" },
    { name: <RedoIcon className="w-4 h-4" />, syntax: "", type: "redo" },
    { name: <BoldIcon className="w-4 h-4" />, syntax: "**Bold**" },
    { name: <ItalicIcon className="w-4 h-4" />, syntax: "*Italic*" },
    {
      name: <StrikethroughIcon className="w-4 h-4" />,
      syntax: "~Strikethrough~",
    },
    { name: "H1", syntax: "# " },
    { name: "H2", syntax: "## " },
    { name: "H3", syntax: "### " },
    { name: <DotIcon className="w-4 h-4" />, syntax: "- " },
    { name: "1.", syntax: "1. " },
    { name: "✓", syntax: "- [ ] " },
    { name: "a", syntax: "[text](url)" },
    { name: <ImageIcon className="w-4 h-4" />, syntax: "![alt](url)" },
    {
      name: <CodeIcon className="w-4 h-4" />,
      syntax: "```-example language\n\n```",
    },
    { name: "--", syntax: "---\n" },
    {
      name: "T",
      syntax:
        "| Header | Title |\n| ----------- | ----------- |\n| Paragraph | Text |",
    },
  ];

  const isHaveUndo = currentIndex === 0 || currentIndex === -1;
  const isHaveRedo = currentIndex === history.length - 1;

  return (
    <div className="">
      {selectedIndex === 0 ? (
        <div className="ml-auto flex items-center flex-wrap space-x-5">
          {btns.map((btn, key) => {
            if (btn.type === "undo") {
              return (
                <div key={key} className="flex items-center">
                  <Button
                    disabled={isHaveUndo}
                    key={btn.syntax}
                    onClick={() => handleUndo()}
                    type="button"
                    variant={"ghost"}
                    size={"icon"}
                    className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                  >
                    {/* <span className="sr-only"> </span> */}
                    {btn.name}
                    {/* <LinkIcon className="h-5 w-5" aria-hidden="true" /> */}
                  </Button>
                </div>
              );
            }

            if (btn.type === "redo") {
              return (
                <div key={key} className="flex items-center">
                  <Button
                    disabled={isHaveRedo}
                    key={btn.syntax}
                    onClick={() => handleRedo()}
                    type="button"
                    size={"icon"}
                    variant={"ghost"}
                    className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                  >
                    {/* <span className="sr-only"> </span> */}
                    {btn.name}
                    {/* <LinkIcon className="h-5 w-5" aria-hidden="true" /> */}
                  </Button>
                </div>
              );
            }
            return (
              <div key={key} className="flex items-center">
                <Button
                  key={btn.syntax}
                  onClick={() => feedElement(btn.syntax)}
                  type="button"
                  variant={"ghost"}
                  size={"icon"}
                  className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                >
                  {/* <span className="sr-only"> </span> */}
                  {btn.name}
                  {/* <LinkIcon className="h-5 w-5" aria-hidden="true" /> */}
                </Button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Header;
