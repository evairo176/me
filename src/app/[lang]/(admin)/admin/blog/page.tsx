"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dateToHumanDate } from "@/helper";
import { BlogInterface } from "@/types/user-types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { deleteBlog, getBlog } from "@/features/api/Blog";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { useRouter, useSearchParams } from "next/navigation";
import { AiOutlineEdit, AiOutlinePlusSquare } from "react-icons/ai";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { BsTrash } from "react-icons/bs";
import { getAllLanguage } from "@/features/api/Language";
import { LANGUAGE_INTERFACE } from "@/types/dashboard-types";

type Props = {};

const Blog = (props: Props) => {
  const { data: session } = useSession();
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();
  const lang = useSearchParams().get("lang");
  const axiosAuth = useAxiosAuth();

  // Queries fetch all language
  const { data: dataLanguage } = useQuery({
    queryFn: async () => await getAllLanguage({ axiosAuth: axiosAuth }),
    queryKey: ["languages"],
  });

  // Queries fetch all blog
  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs", lang ? (lang as string) : "id"],
    queryFn: async () =>
      await getBlog({
        id: session?.user.id as string,
        lang: lang ? (lang as string) : "id",
      }),
  });

  // Access the client
  const queryClient = useQueryClient();

  // Mutations delete
  const { mutate: deleteBlogMutation, isPending: isPendingDeleted } =
    useMutation({
      mutationFn: deleteBlog,
      onSuccess: async () => {
        // Invalidate and refetch
        await queryClient.invalidateQueries({ queryKey: ["blogs"] });
        toast.success("Data deleted successfully");
      },
      onError: (error) => {
        console.log(error);
        toast.error("Please Try Again");
      },
    });

  const columns = useMemo<ColumnDef<BlogInterface>[]>(
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
        accessorKey: "image",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Image" />
        ),
        cell: ({ row }) => {
          let blog = row.original;
          return (
            <Image
              src={blog.image}
              alt={blog.title}
              width={100}
              height={100}
              className="w-10 h-10"
            />
          );
        },
      },
      {
        accessorKey: "id",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="ID Role" />
        ),
        enableGlobalFilter: true,
      },
      {
        accessorKey: "lang",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Language" />
        ),
        enableGlobalFilter: true,
      },
      {
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        enableGlobalFilter: true,
      },
      {
        accessorKey: "slug",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Slug" />
        ),
        enableGlobalFilter: true,
      },
      {
        accessorKey: "draft",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
          let role = row.original;
          return role.draft ? (
            <Badge>Publish</Badge>
          ) : (
            <Badge variant="destructive">Not Published</Badge>
          );
        },
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => {
          let blog = row.original;
          return (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <DotsHorizontalIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(blog.id)}
                  >
                    Copy payment ID
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => router.push(`/admin/blog/edit/${blog.id}`)}
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>View details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
    <div className="rounded-md border bg-card text-card-foreground p-3">
      <div className="flex flex-row justify-end items-center">
        <Button size={"sm"} className="rounded-none" asChild>
          <Link href="/admin/blog/create">
            <AiOutlinePlusSquare className="w-4 h-4" />
          </Link>
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant={"destructive"}
              size={"sm"}
              className="ml-2 rounded-none"
              disabled={isPendingDeleted}
            >
              <BsTrash className="w-4 h-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  if (selected.length > 0) {
                    deleteBlogMutation({ idArray: selected, axiosAuth });
                  } else {
                    toast.error("You not have any seleceted data");
                  }
                }}
                disabled={isPendingDeleted}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Tabs defaultValue={!lang ? "id" : lang} className="w-full">
        <TabsList className={`flex flex-row flex-wrap w-[400px] h-auto`}>
          {dataLanguage?.map((row: LANGUAGE_INTERFACE) => {
            return (
              <TabsTrigger
                key={row.id}
                value={row.code}
                onClick={() => router.push(`?lang=${row.code}`)}
              >
                {row.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {dataLanguage?.map((row: LANGUAGE_INTERFACE) => {
          return (
            <TabsContent key={row.id} value={row.code}>
              <DataTable
                columns={columns}
                data={dataBlog}
                onRowSelect={setSelected}
              />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Blog;
