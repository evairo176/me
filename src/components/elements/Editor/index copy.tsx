// "use client";

// import { useTheme } from "next-themes";
// import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
// import { BlockNoteView, useBlockNote } from "@blocknote/react";
// import "@blocknote/core/style.css";

// import { useEdgeStore } from "@/lib/edgestore";
// import { defaultExtensions } from "@/lib/default-extentions";

// interface EditorProps {
//   onChange: (value: string) => void;
//   initialContent?: string;
//   editable?: boolean;
// }

// const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
//   const { resolvedTheme } = useTheme();
//   const { edgestore } = useEdgeStore();

//   const handleUpload = async (file: File) => {
//     const response = await edgestore.publicFiles.upload({
//       file,
//     });

//     return response.url;
//   };

//   const editor: BlockNoteEditor = useBlockNote({
//     editable,
//     // enableBlockNoteExtensions:defaultExtensions,
//     initialContent: initialContent
//       ? (JSON.parse(initialContent) as PartialBlock[])
//       : undefined,
//     onEditorContentChange: (editor) => {
//       onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
//     },
//     uploadFile: handleUpload,
//   });

//   return (
//     <div>
//       <BlockNoteView
//         editor={editor}
//         theme={resolvedTheme === "dark" ? "dark" : "light"}
//       />
//     </div>
//   );
// };

// export default Editor;

// "use client";
// import { FC } from "react";
// import { Editor as EditorNovel } from "novel";
// import { defaultEditorContent } from "@/lib/default-content";

// interface EditorNovelInterface {
//   form: any;
//   name: any;
// }
// const Editor: FC<EditorNovelInterface> = ({ form, name }) => {
//   return (
//     <div>
//       <EditorNovel
//         disableLocalStorage={true}
//         defaultValue={form.getValues(name)}
//         onUpdate={(value) => {
//           const data = value?.getHTML();
//           form.setValue(name, data);
//         }}
//       />
//     </div>
//   );
// };

// export default Editor;
