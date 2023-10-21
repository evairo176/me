"use client";
import CustomUpload from "@/components/elements/CustomUpload";
import Editor from "@/components/elements/Editor";
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
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";
import { z } from "zod";

type Props = {};

const Create = (props: Props) => {
  const form = useForm<z.infer<typeof CreateBlogSchema>>({
    resolver: zodResolver(CreateBlogSchema),
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  const router = useRouter();
  const { data: session } = useSession();

  const createBlog = async (val: z.infer<typeof CreateBlogSchema>) => {
    setIsloading(true);
    const configD = {
      headers: { Authorization: `Bearer ${session?.user.token}` },
    };

    const formData = new FormData();
    formData.append("image", val.imageBanner);
    formData.append("title", val.title);
    formData.append("content", val.content);
    formData.append("des", val.des);

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
