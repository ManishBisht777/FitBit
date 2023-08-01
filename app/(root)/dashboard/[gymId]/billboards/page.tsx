import BillboardClient from "@/components/billboard-client";
import { prisma } from "@/lib/db";
import { format } from "date-fns";
import { BillboardColumn } from "./columns";

type Props = {
  params: {
    gymId: string;
  };
};

export default async function Billboards({ params }: Props) {
  const billboards = await prisma.billboard.findMany({
    where: {
      gymId: params.gymId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 md:p-8 p-2 md:pt-6 pt-2">
        <BillboardClient items={formattedBillboards} />
      </div>
    </div>
  );
}
