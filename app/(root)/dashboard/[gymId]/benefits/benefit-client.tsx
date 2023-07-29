"use client";

import { Plus } from "lucide-react";

import { useParams, useRouter } from "next/navigation";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { BenefitColumn, columns } from "./columns";

interface Props {
  items: BenefitColumn[];
}

export default function BenefitClient({ items }: Props) {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between">
        <Heading
          title={`Benefits (${items.length})`}
          description="Manage all you gym Benefit's here"
        />
        <Button
          onClick={() => router.push(`/dashboard/${params.gymId}/benefits/new`)}
        >
          <Plus className="w-4 h-4 mr-2" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={items} searchKey="name" />
    </>
  );
}
