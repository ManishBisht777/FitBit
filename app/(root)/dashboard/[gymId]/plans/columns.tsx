"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
// import CellAction from "./cell-actions";

export type PlanColumn = {
  id: string;
  name: string;
  createdAt: string;
};

export const columns: ColumnDef<PlanColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
