"use client";

import { Plus } from "lucide-react";

import { Heading } from "./ui/heading";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {};

export default function BillboardClient({}: Props) {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between">
        <Heading
          title="Billboards (0)"
          description="Manage all you gym here's"
        />
        <Button
          onClick={() =>
            router.push(`/dashboard/${params.gymId}/billboards/new`)
          }
        >
          <Plus className="w-4 h-4 mr-2" /> Add New
        </Button>
      </div>
      <Separator />
    </>
  );
}
