"use client";
import { Code, Pre } from "@/components/elements/Blog/Code";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";
import Header from "@/components/elements/Blog/Header";
import Footer from "@/components/elements/Blog/Footer";
import { Tab } from "@headlessui/react";
import {
  AtSymbolIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

type Props = {};
const DATA_COR = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [102.0, 0.5] },
      properties: { prop0: "value0" },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [102.0, 0.0],
          [103.0, 1.0],
          [104.0, 0.0],
          [105.0, 1.0],
        ],
      },
      properties: { prop0: "value0", prop1: 0.0 },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [100.0, 0.0],
            [101.0, 0.0],
            [101.0, 1.0],
            [100.0, 1.0],
            [100.0, 0.0],
          ],
        ],
      },
      properties: { prop0: "value0", prop1: { this: "that" } },
    },
  ],
};

const CreateBlogPage = (props: Props) => {
  const [source, setSource] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const FILTER_DATA_COR = DATA_COR.features.filter(
    (row) => row.geometry.type === "Polygon"
  );

  const FILTER_DATA_COR2 = FILTER_DATA_COR.map(
    (row: any) => row.geometry.coordinates[0]
  );
  const arrayResult: any = {
    point1: {
      x: FILTER_DATA_COR2[0][0][0],
      y: FILTER_DATA_COR2[0][0][1],
    },
    point2: {
      x: FILTER_DATA_COR2[0][1][0],
      y: FILTER_DATA_COR2[0][1][1],
    },
    point3: {
      x: FILTER_DATA_COR2[0][2][0],
      y: FILTER_DATA_COR2[0][2][1],
    },
    point4: {
      x: FILTER_DATA_COR2[0][3][0],
      y: FILTER_DATA_COR2[0][3][1],
    },
    point5: {
      x: FILTER_DATA_COR2[0][4][0],
      y: FILTER_DATA_COR2[0][4][1],
    },
  };

  function isPalindrome(input: string): boolean {
    // Palindrome
    const reversedString = input.split("").reverse().join("");
    const palindrome = input === reversedString;

    if (palindrome) {
      return palindrome;
    }

    const cleanedInput = input.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const firstChar = cleanedInput.charAt(0);
    const lastChar = cleanedInput.charAt(cleanedInput.length - 1);

    const polindrom2 = firstChar === lastChar;
    return polindrom2;
  }

  // Example usage:
  const word1 = "sakas";
  const isPalindromeResult1 = isPalindrome(word1);

  console.log(
    `Does "${word1}" have the same first and last characters? ${isPalindromeResult1}`
  );

  const word2 = "katakrusaktek";
  const isPalindromeResult2 = isPalindrome(word2);

  console.log(
    `Does "${word2}" have the same first and last characters? ${isPalindromeResult2}`
  );
  // const RESULT = FILTER_DATA_COR2.map((row, key) => {
  //   const show  = {
  //     point1
  //   }
  //   return row;
  // });
  console.log({ FILTER_DATA_COR, FILTER_DATA_COR2, arrayResult });

  const handleChange = (event: any) => {
    const newText = event.target.value;

    // Save the current state to the history
    setHistory((prevHistory) => [...prevHistory, source]);
    setCurrentIndex(history.length);

    setSource(newText);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      // Navigate to the previous state in the history
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setSource(history[currentIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      // Navigate to the next state in the history
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSource(history[currentIndex + 1]);
    }
  };

  const feedElement = (syntax: string) => {
    return setSource(source + syntax);
  };
  const options = { code: Code, pre: Pre };
  const data = {
    lines: source.split(/\r\n|\r|\n/).length,
    words: source.split(/\s+/).filter(Boolean).length,
    characters: source.length,
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.key === "z") {
        // Ctrl+Z for undo
        handleUndo();
      } else if (event.ctrlKey && event.key === "y") {
        // Ctrl+Y for redo
        handleRedo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleUndo, handleRedo]);

  return (
    <div className="px-5 mx-auto">
      <form action="#">
        <Tab.Group>
          {({ selectedIndex }) => (
            <>
              <Tab.List
                key={selectedIndex}
                className="flex flex-row items-center justify-between flex-wrap-reverse gap-2"
              >
                <div>
                  <Tab
                    className={({ selected }) =>
                      cn(
                        selected
                          ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                        "rounded-md border border-transparent px-3 py-1.5 text-sm font-medium"
                      )
                    }
                  >
                    Write
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      cn(
                        selected
                          ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                        "ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium"
                      )
                    }
                  >
                    Preview
                  </Tab>
                </div>

                {/* These buttons are here simply as examples and don't actually do anything. */}
                <Header
                  currentIndex={currentIndex}
                  history={history}
                  handleUndo={handleUndo}
                  handleRedo={handleRedo}
                  feedElement={feedElement}
                  selectedIndex={selectedIndex}
                />
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                  <label htmlFor="comment" className="sr-only">
                    Comment
                  </label>
                  <div>
                    <Textarea
                      rows={5}
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Add your comment..."
                      value={source}
                      onChange={(e) => handleChange(e)}
                    />
                    <Footer data={data} />
                  </div>
                </Tab.Panel>
                <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                  <div className="border-b">
                    <div className="mx-px mt-px px-3 pb-12 pt-2 text-sm leading-5">
                      <article className="prose prose-pre:p-0 max-w-none dark:prose-invert">
                        <Markdown
                          components={options}
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[
                            rehypeSanitize,
                            [
                              rehypeExternalLinks,
                              { content: { type: "text", value: "🔗" } },
                            ],
                          ]}
                        >
                          {source}
                        </Markdown>
                      </article>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Post
          </button>
        </div>
      </form>
      {/* <div className="flex justify-between">
        <section className="w-full pt-5">
          <textarea
            className="w-full bg-transparent h-full resize-none focus:outline-none placeholder:text-lg placeholder:text-white placeholder:tracking-wider placeholder:opacity-80"
            placeholder="Feed me some Markdown 🍕"
            rows={15}
            autoFocus
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </section>

        <div className="fixed left-1/2 w-[2px] h-full border-l-2 border-yellow-600 border-dashed" />

        <article className="w-full ">
          <Markdown
            className="prose prose-pre:p-0 max-w-none dark:prose-invert"
            components={options}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSanitize,
              [rehypeExternalLinks, { content: { type: "text", value: "🔗" } }],
            ]}
          >
            {source}
          </Markdown>
        </article>
      </div> */}
    </div>
  );
};

export default CreateBlogPage;
