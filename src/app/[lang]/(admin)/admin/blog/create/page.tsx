"use client";
import CustomUpload from "@/components/elements/CustomUpload";
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
import { CreateBlogSchema } from "@/utils/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
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
import { CategoryInterface } from "@/types/user-types";
import { createBlog } from "@/features/api/Blog";
import MDXEditorComponent from "@/components/elements/MDXEditorComponent";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllLanguage } from "@/features/api/Language";
import { LANGUAGE_INTERFACE } from "@/types/dashboard-types";

type Props = {};

const Create = ({}: Props) => {
  const [lang, setLang] = useState<string>("");
  const router = useRouter();
  const axiosAuth = useAxiosAuth();

  const form = useForm<z.infer<typeof CreateBlogSchema>>({
    resolver: zodResolver(CreateBlogSchema),
  });

  const handleLang = (e: string) => {
    let valueLang = e;
    setLang(valueLang);
    form.setValue("lang", valueLang);
  };

  // Queries fetch all language
  const { data: dataLanguage } = useQuery({
    queryFn: async () => await getAllLanguage(),
    queryKey: ["languages"],
  });

  // Queries fetch all category
  const {
    data: dataCategory,
    isLoading: isLoadingQuery,
    isError,
  } = useQuery({
    queryKey: ["categories", lang ? lang : "id"],
    queryFn: async () => {
      const response = await axiosAuth.get(
        `/category?lang=${lang ? lang : "id"}`
      );

      return response.data;
    },
  });

  // Access the client
  const queryClient = useQueryClient();

  const { mutate: submitBlog, isPending } = useMutation({
    mutationFn: createBlog,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({
        queryKey: ["blogs", lang ? lang : "id"],
      });
      toast.success("Created Blog Successfully");
      router.push("/admin/blog");
    },
    onError: () => {
      toast.error("Please Try Again");
    },
  });

  return (
    <div className="p-4 lg:p-8 rounded-md border bg-card text-card-foreground w-full">
      <div className="font-semibold text-medium">
        Create <span className="text-primary">Blog</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((val) =>
            submitBlog({ axiosAuth: axiosAuth, val: val })
          )}
          className="mt-5 space-y-6 pt-6"
        >
          <FormField
            control={form.control}
            name="lang"
            render={({ field }) => (
              <FormItem className="w-full lg:w-full">
                <FormLabel>Language</FormLabel>

                <Select
                  onValueChange={(value) => handleLang(value)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {dataLanguage?.map((row: LANGUAGE_INTERFACE) => {
                      return (
                        <SelectItem key={row.code} value={row.code}>
                          {row.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
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
                      dataCategory &&
                      dataCategory?.category?.map(
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
            name="slug"
            render={({ field }) => (
              <FormItem className="w-full lg:w-full">
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. software-engineer-technology"
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
                <FormLabel>Content </FormLabel>
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

          <div className="flex justify-end">
            <Button disabled={isPending}>
              {isPending ? "Loading..." : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Create;
