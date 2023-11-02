"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { RoleInterface } from "@/types/role-types";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type user = {
//   id: string;
//   job: string;
// };

export const columns: ColumnDef<RoleInterface>[] = [
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
    enableGlobalFilter: true,
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
            <DialogTrigger asChild>
              <Button
                variant={"destructive"}
                size={"sm"}
                className="rounded-none"
              >
                <BsTrash className="w-4 h-4" />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>Apa anda yakin ingin {role.name} ?</DialogTitle>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant={"secondary"}>
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit" variant={"destructive"}>
                    Delete
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant={"warning"} size={"sm"} className="rounded-none">
            <AiOutlineEdit className="w-4 h-4" />
          </Button>
        </>
      );
    },
  },
];
