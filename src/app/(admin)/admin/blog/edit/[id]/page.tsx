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
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import { CategoryInterface, TagInterface } from "@/types/user-types";
import MDXEditorComponent from "@/components/elements/MDXEditorComponent";

type Props = {};

const EditBlog = (props: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { id } = useParams();

  // Queries fetch all category
  const { data: dataCategory, isLoading: isLoadingCategory } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(`${config["BACKEND_URL"]}/category`);

      return response.data;
    },
  });

  // Queries fetch all blog
  const {
    data: dataDetailBlog,
    isLoading: isLoadingDetailBlog,
    isError: isErrorDetailBlog,
    isSuccess: isSuccessDetailBlog,
  } = useQuery({
    queryFn: async () => {
      const response = await axios.get(`${config["BACKEND_URL"]}/blogs/${id}`);
      return response.data.blog;
    },
    queryKey: ["blogs", id],
  });

  const form = useForm<z.infer<typeof CreateBlogSchema>>({
    resolver: zodResolver(CreateBlogSchema),
    defaultValues: {
      title: "",
      des: "",
      category: "",
      imageBanner: "",
      content: "",
      draft: false,
      tags: [],
    },
  });

  useEffect(() => {
    const tags = dataDetailBlog?.Tags.map((item: TagInterface) => item.name);
    const category = dataDetailBlog?.categoryId;
    if (dataDetailBlog) {
      let defaultValue = {
        title: dataDetailBlog?.title,
        des: dataDetailBlog?.des,
        category: category,
        imageBanner: dataDetailBlog?.image,
        content: dataDetailBlog?.content,
        draft: dataDetailBlog?.draft,
        tags: tags,
      };

      form.reset(defaultValue);
    }
  }, [form, dataDetailBlog]);

  // Access the client
  const queryClient = useQueryClient();

  const { mutate: submitUpdateBlog, isPending } = useMutation({
    mutationFn: async (val: z.infer<typeof CreateBlogSchema>) => {
      console.log(val);
      const configD = {
        headers: { Authorization: `Bearer ${session?.user.token}` },
      };

      const formData = new FormData();
      formData.append("image", val.imageBanner);
      formData.append("title", val.title);
      formData.append("content", val.content);
      formData.append("des", val.des);
      formData.append("draft", val.draft ? "1" : "0");
      formData.append("Tags", JSON.stringify(val.tags));
      formData.append("categoryId", val.category);

      const response = await axios.put(
        `${config["BACKEND_URL"]}/blogs/${id}`,
        formData,
        configD
      );

      return response.data;
    },
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("Updated blog successfully");
      router.push("/admin/blog");
    },
    onError: () => {
      toast.error("Please Try Again");
    },
  });

  if (isLoadingDetailBlog) {
    return <div>loading..</div>;
  }

  return (
    <div className="p-4 lg:p-8 rounded-md border bg-card text-card-foreground">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-medium">
          Edit <span className="text-primary">Blog </span>{" "}
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((val) => submitUpdateBlog(val))}
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
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {isSuccessDetailBlog &&
                      dataCategory?.category?.map(
                        (row: CategoryInterface, key: number) => {
                          return (
                            <SelectItem key={key} value={row.id?.toString()}>
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
                  <MDXEditorComponent
                    {...field}
                    form={form}
                    placeholder="Isi sesukanya"
                    name="content"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4">
            <Button disabled={isPending}>
              {isPending ? "Loading..." : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditBlog;
