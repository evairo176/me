"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMenuSchema } from "@/utils/form-schema";
import { createMenu } from "@/features/api/Menu";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { MultiSelect } from "@/components/elements/MultiSelect";
import { getAllRole } from "@/features/api/Role";
import { RoleInterface } from "@/types/role-types";

type Props = {};

const MenuPage = (props: Props) => {
  const form = useForm<z.infer<typeof createMenuSchema>>({
    resolver: zodResolver(createMenuSchema),
    defaultValues: {
      roles: [],
    },
  });
  const axiosAuth = useAxiosAuth();
  // Access the client
  const queryClient = useQueryClient();

  // Queries fetch all role
  const {
    data: dataRole,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => await getAllRole({ axiosAuth: axiosAuth }),
    queryKey: ["roles"],
  });

  // mutation create
  const { mutate: submitRole, isPending } = useMutation({
    mutationFn: createMenu,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["menus"] });
      toast.success("Created Role Successfully");
      //  form.reset({
      //    name: "",
      //    status: false,
      //  });
    },
    onError: () => {
      toast.error("Please Try Again");
    },
  });
  console.log(
    dataRole?.map((row: RoleInterface) => {
      return {
        value: row.id,
        label: row.name,
      };
    })
  );
  return (
    <div className="rounded-md border bg-card text-card-foreground p-3">
      <div className="flex flex-row justify-between items-center">
        <div className="font-medium">Menu Table</div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button disabled={isPending} size={"sm"} className="rounded-none">
                <AiOutlinePlusSquare className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((val) =>
                    submitRole({ axiosAuth: axiosAuth, val })
                  )}
                  className="mt-5 space-y-6 pt-6"
                >
                  <DialogHeader>
                    <DialogTitle>Create Role</DialogTitle>
                    <DialogDescription>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full lg:w-full">
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Role" {...field} />
                            </FormControl>
                            <FormDescription>
                              At least 3 characters
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                          <FormItem className="w-full lg:w-full">
                            <FormLabel>Url</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. /menu or /roles"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              At least 3 characters
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Status</FormLabel>
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
                        name="roles"
                        render={({ field }) => (
                          <FormItem className="w-full lg:w-full">
                            <FormLabel>Roles</FormLabel>
                            <FormControl>
                              <MultiSelect
                                options={[]}
                                selected={field.value}
                                {...field}
                                className="w-[560px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="submit" disabled={isPending}>
                        {isPending ? "Loading..." : "Save"}
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
