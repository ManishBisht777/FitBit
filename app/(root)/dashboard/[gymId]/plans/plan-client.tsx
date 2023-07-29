"use client";

import { Plus } from "lucide-react";

import { useParams, useRouter } from "next/navigation";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { PlanColumn, columns } from "./columns";

interface Props {
  items: PlanColumn[];
}

export default function PlanClient({ items }: Props) {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between">
        <Heading
          title={`Plans (${items.length})`}
          description="Manage all you gym Plan's here"
        />
        <Button
          onClick={() => router.push(`/dashboard/${params.gymId}/plans/new`)}
        >
          <Plus className="w-4 h-4 mr-2" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={items} searchKey="name" />
    </>
  );
}
