"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
// import CellAction from "./cell-actions";

export type BenefitColumn = {
  id: string;
  name: string;
  createdAt: string;
};

export const columns: ColumnDef<BenefitColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Joined At",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
