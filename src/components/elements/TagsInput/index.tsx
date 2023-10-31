import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

interface TagsInputProps {
  form: any;
  name: string;
  label: string;
}

const TagsInput = ({ form, name, label }: TagsInputProps) => {
  const [tagValue, setTagValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const addtags = (e: any) => {
    if (e.keyCode === 9 && tagValue) {
      alert("check");
      setTags([...tags, tagValue]);
    }
  };

  const handleDeleTags = (item: string) => {
    const tagDelete: any = tags.filter((value: string) => item !== value);

    setTags(tagDelete);
    form.setValue(name, tagDelete);
  };

  useEffect(() => {
    const val = form.getValues(name);

    if (val && val.length > 0) {
      setTags(val);
    }
  }, [name, form]);

  return (
    <div>
      <div className="space-x-3 mb-2">
        {tags?.map((item: string, key: number) => (
          <Badge
            variant={"outline"}
            key={key}
            onClick={() => handleDeleTags(item)}
          >
            {item}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Badge>
        ))}
      </div>
      <Input
        onKeyDown={addtags}
        onChange={(e) => setTagValue(e.target.value)}
      />
    </div>
  );
};

export default TagsInput;
