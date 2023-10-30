"use client";
import React, { useState, useRef, useMemo, FC } from "react";
import JoditEditor from "jodit-react";

interface EditorNovelInterface {
  form: any;
  name: any;
  placeholder: string;
}
const Editor: FC<EditorNovelInterface> = ({
  form,
  name,
  placeholder = "Make your thinks",
}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={form.getValues(name)}
        config={config}
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {
          form.setValue(name, newContent);
        }}
      />
    </div>
  );
};

export default Editor;
