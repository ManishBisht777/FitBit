"use client";

import { Plus } from "lucide-react";

import { Heading } from "./ui/heading";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  BillboardColumn,
  columns,
} from "@/app/(root)/dashboard/[gymId]/billboards/columns";
import { DataTable } from "./ui/data-table";

interface Props {
  items: BillboardColumn[];
}

export default function BillboardClient({ items }: Props) {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between">
        <Heading
          title={`Billboards (${items.length})`}
          description="Manage all you gym here's"
        />
        <Button
          onClick={() =>
            router.push(`/dashboard/${params.gymId}/billboards/new`)
          }
        >
          <Plus className="w-4 h-4 mr-2 md:flex hidden" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={items} searchKey="label" />
    </>
  );
}
