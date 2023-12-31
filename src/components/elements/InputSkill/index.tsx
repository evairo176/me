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
import { array, z } from "zod";

interface InputSkillProps {
  form: any;
  name: string;
  label: string;
  defaultValue?: string[];
}

const InputSkill: FC<InputSkillProps> = ({
  form,
  name,
  label,
  defaultValue,
}) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const getDefaultValue = () => {
      const val = defaultValue;

      if (val && val.length > 0) {
        setValues(val);
        form.setValue(name, val);
      }
    };

    getDefaultValue();
    // eslint-disable-next-line
  }, [form, name]);

  const handleSaveValue = () => {
    const value = form.getValues(name);

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
                  <Input onChange={field.onChange} className="w-[246px]" />
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
                {values.map((item: string, key: number) => (
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
