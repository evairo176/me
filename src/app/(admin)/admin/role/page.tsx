"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createRole,
  deleteRole,
  getAllRole,
  updateRole,
} from "@/features/api/Role";
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
import { useForm } from "react-hook-form";
import { createRoleSchema } from "@/utils/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { createBlog } from "@/features/api/Blog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { RoleInterface } from "@/types/role-types";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

type Props = {};

const RolesPage = (props: Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [resetSelected, setResetSelected] = useState<boolean>(false);
  const form = useForm<z.infer<typeof createRoleSchema>>({
    resolver: zodResolver(createRoleSchema),
  });
  const axiosAuth = useAxiosAuth();
  const router = useRouter();
  // Access the client
  const queryClient = useQueryClient();

  // Queries fetch all blog
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
    mutationFn: createRole,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["roles"] });
      toast.success("Created Role Successfully");
      form.reset({
        name: "",
        status: false,
      });
    },
    onError: () => {
      toast.error("Please Try Again");
    },
  });

  // Mutations delete
  const { mutate: deleteRoleMutation, isPending: isPendingDeleted } =
    useMutation({
      mutationFn: deleteRole,
      onSuccess: async () => {
        // Invalidate and refetch
        await queryClient.invalidateQueries({ queryKey: ["roles"] });
        toast.success("Data deleted successfully");
      },
      onError: (error) => {
        console.log(error);
        toast.error("Please Try Again");
      },
    });

  // mutation update
  const { mutate: submitUpdateRole, isPending: isPendingUpdate } = useMutation({
    mutationFn: updateRole,
    onSuccess: async () => {
      // Invalidate and refetch
      setResetSelected(true);
      await queryClient.invalidateQueries({ queryKey: ["roles"] });
      toast.success("Update Role Successfully");
      form.reset({
        name: "",
        status: false,
      });
    },
    onError: () => {
      toast.error("Please Try Again");
    },
  });

  const handleEdit = (val: RoleInterface) => {
    if (!val.id) {
      toast.error("Sorry something wrong please try again!");
      return;
    }
    form.setValue("name", val.name);
    form.setValue("status", val.status);
  };

  // useEffect(() => {
  //   if (dataRole) {
  //     setData(dataRole);
  //   }
  // }, [dataRole]);

  const columns = useMemo<ColumnDef<RoleInterface>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value: any) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value: any) => row.toggleSelected(value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "id",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="ID Role" />
        ),
        enableGlobalFilter: true,
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Name Role" />
        ),
        enableGlobalFilter: true,
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
          let role = row.original;
          return role.status ? (
            <Badge>ON</Badge>
          ) : (
            <Badge variant="destructive">OFF</Badge>
          );
        },
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => {
          let role = row.original;

          return (
            <>
              <Dialog>
                <DialogTrigger disabled={isPendingUpdate} asChild>
                  <Button
                    onClick={() => handleEdit(role)}
                    variant={"warning"}
                    size={"sm"}
                  >
                    <AiOutlineEdit className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit((val) =>
                        submitUpdateRole({
                          axiosAuth: axiosAuth,
                          val,
                          id: role.id,
                        })
                      )}
                      className="mt-5 space-y-6 pt-6"
                    >
                      <DialogHeader>
                        <DialogTitle>Update Role</DialogTitle>
                        <DialogDescription>
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem className="w-full lg:w-full">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g. Software Engineer Technology"
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

                          <div className="flex justify-end"></div>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <Button type="submit" disabled={isPendingUpdate}>
                            {isPendingUpdate ? "Loading..." : "Save Change"}
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </>
          );
        },
      },
    ],
    []
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <>
      <div className="rounded-md border bg-card text-card-foreground p-3">
        <div className="flex flex-row justify-between items-center">
          <div className="font-medium">Role Table</div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled={isPending}>
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
                                <Input
                                  placeholder="e.g. Software Engineer Technology"
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

                        <div className="flex justify-end"></div>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"destructive"}
                  size={"sm"}
                  className="ml-2 rounded-none"
                  disabled={isPendingDeleted}
                >
                  <BsTrash className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Apa anda yakin ingin menghapus data ?</DialogTitle>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant={"secondary"}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      type="submit"
                      variant={"destructive"}
                      onClick={() => {
                        if (selected.length > 0) {
                          deleteRoleMutation({ idArray: selected, axiosAuth });
                        } else {
                          toast.error("You not have any seleceted data");
                        }
                      }}
                      disabled={isPendingDeleted}
                    >
                      Delete
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="rounded-md border bg-card text-card-foreground p-3 mt-3">
        <DataTable
          columns={columns}
          data={dataRole}
          onRowSelect={setSelected}
          resetSelected={resetSelected}
        />
      </div>
    </>
  );
};

export default RolesPage;
