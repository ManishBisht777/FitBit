"use client";

import { ColumnDef } from "@tanstack/react-table";
// import CellAction from "./cell-actions";

export type TrainerColumn = {
  id: string;
  name: string;
  role: string;
  createdAt: string;
};

export const columns: ColumnDef<TrainerColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "createdAt",
    header: "Joined At",
  },
  //   {
  //     id: "actions",
  //     cell: ({ row }) => <CellAction data={row.original} />,
  //   },
];
