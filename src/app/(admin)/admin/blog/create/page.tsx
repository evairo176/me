"use client";
import CustomUpload from "@/components/elements/CustomUpload";
import Editor from "@/components/elements/Editor";
import InputSkill from "@/components/elements/InputSkill";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { defaultEditorContent } from "@/lib/default-content";
import config from "@/utils/config";
import { CreateBlogSchema } from "@/utils/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryInterface } from "@/types/user-types";

type Props = {};

// A function to fetch data from the API
const fetchDataCategory = async () => {
  try {
    const response = await axios.get(`${config["BACKEND_URL"]}/category`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const Create = (props: Props) => {
  const form = useForm<z.infer<typeof CreateBlogSchema>>({
    resolver: zodResolver(CreateBlogSchema),
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  const router = useRouter();
  const { data: session } = useSession();

  // Queries
  const {
    data: dataQuery,
    isLoading: isLoadingQuery,
    isError,
  } = useQuery("categories", () => fetchDataCategory());

  console.log(dataQuery);

  const createBlog = async (val: z.infer<typeof CreateBlogSchema>) => {
    setIsloading(true);
    const configD = {
      headers: { Authorization: `Bearer ${session?.user.token}` },
    };

    // const formData = {
    //   image: val.imageBanner,
    //   title: val.title,
    //   content: val.content,
    //   des: val.des,
    //   draft: val.draft ? "1" : "0",
    //   Tags: JSON.stringify(val.tags),
    //   categoryId: val.category,
    // };

    const formData = new FormData();
    formData.append("image", val.imageBanner);
    formData.append("title", val.title);
    formData.append("content", val.content);
    formData.append("des", val.des);
    formData.append("draft", val.draft ? "1" : "0");
    formData.append("Tags", JSON.stringify(val.tags));
    formData.append("categoryId", val.category);

    await axios
      .post(`${config["BACKEND_URL"]}/blogs`, formData, configD)
      .then((response) => {
        // console.log(response?.data?.message);
        if (response?.data?.message) {
          toast.success(response?.data?.message);
        } else {
          toast.success("Data not created");
        }
        setIsloading(false);

        router.push("/admin/blog");
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error("Please Try Again");
        }
        setIsloading(false);
      });
  };

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(createBlog, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("blogs");
    },
  });
  return (
    <div className="p-4 lg:p-8 rounded-md border bg-card text-card-foreground">
      <div className="font-semibold text-medium">
        Create <span className="text-primary">Blog</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((val) => mutation.mutate(val))}
          className="mt-5 space-y-6 pt-6"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full lg:w-full">
                <FormLabel>Category</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      {isError ? (
                        <SelectValue placeholder="Category Error" />
                      ) : (
                        <SelectValue placeholder="Select category" />
                      )}
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {!isLoadingQuery &&
                      dataQuery &&
                      dataQuery?.category?.map(
                        (row: CategoryInterface, key: number) => {
                          return (
                            <SelectItem key={key} value={row.id}>
                              {row.name}
                            </SelectItem>
                          );
                        }
                      )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full lg:w-full">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Software Engineer Technology"
                    {...field}
                  />
                </FormControl>
                <FormDescription>At least 3 characters</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="draft"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Draft</FormLabel>
                  <FormDescription>
                    You can make publis or not publish.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="des"
            render={({ field }) => (
              <FormItem className="w-full lg:w-full">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Make describtion your blog"
                    {...field}
                  />
                </FormControl>
                <FormDescription>At least 3 characters</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageBanner"
            render={({ field }) => (
              <FormItem className="w-full lg:w-full">
                <FormLabel>Image Blog</FormLabel>
                <FormControl>
                  <CustomUpload {...field} name="imageBanner" form={form} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <InputSkill form={form} name="tags" label="Add Tag" />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full lg:w-full">
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Editor {...field} form={form} name="content" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button disabled={isLoading}>
              {isLoading ? "Loading..." : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Create;
