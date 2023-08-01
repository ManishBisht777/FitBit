"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { OrderColumn, columns } from "./columns";

interface Props {
  items: OrderColumn[];
}

export default function OrderClient({ items }: Props) {
  return (
    <>
      <Heading
        title={`Orders (${items.length})`}
        description="Manage all you gym Benefit's here"
      />
      <Separator />
      <DataTable columns={columns} data={items} searchKey="name" />
    </>
  );
}
