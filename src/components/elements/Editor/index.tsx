import { defaultEditorContent } from "@/lib/default-content";
import { Editor as EditorNovel } from "novel";
import { FC } from "react";

interface EditorNovelInterface {
  form: any;
  name: any;
}
const Editor: FC<EditorNovelInterface> = ({ form, name }) => {
  return (
    <div>
      <EditorNovel
        className="rounded-md border bg-card text-card-foreground"
        disableLocalStorage={true}
        defaultValue={
          form.getValues(name) ? form.getValues(name) : defaultEditorContent
        }
        onUpdate={(value) => {
          const data = value?.getHTML();
          form.setValue(name, data);
        }}
      />
    </div>
  );
};

export default Editor;
