import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface InputSkillProps {
  form: any;
  name: string;
  label: string;
}

const InputSkill: FC<InputSkillProps> = ({ form, name, label }) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveValue = () => {
    const value = inputRef.current?.value;

    if (value === "") {
      return;
    }

    const newValue: any = [...values, value];

    setValues(newValue);

    form.setValue(name, newValue);
  };

  const handleDeleteValue = (item: string) => {
    const skills: any = values.filter((value: string) => item !== value);

    setValues(skills);
    form.setValue(name, skills);
  };

  useEffect(() => {
    console.log({ luar: form.getValues(name) });

    if (form.getValues(name) && form.getValues(name).length > 0) {
      console.log({ val: form.getValues(name) });
      setValues(form.getValues(name));
    }
  }, [form, name]);

  console.log({ values });

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block">{label}</FormLabel>
          <FormControl>
            <>
              <Button
                type="button"
                variant="outline"
                className="mb-2"
                onClick={() => setHide(!isHide)}
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                {label}
              </Button>
              {isHide && (
                <div className="my-4 flex flex-row gap-4">
                  <Input ref={inputRef} className="w-[246px]" />
                  <Button
                    type="button"
                    variant={"outline"}
                    onClick={handleSaveValue}
                  >
                    Save
                  </Button>
                </div>
              )}
              <div className="space-x-3">
                {values &&
                  values?.map((item: string, key: number) => (
                    <Badge
                      variant={"outline"}
                      key={key}
                      onClick={() => handleDeleteValue(item)}
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
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputSkill;
