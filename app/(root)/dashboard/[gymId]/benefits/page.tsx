import { prisma } from "@/lib/db";
import { format } from "date-fns";
import BenefitClient from "./benefit-client";
import { BenefitColumn } from "./columns";

type Props = {
  params: {
    gymId: string;
  };
};

export default async function Trainers({ params }: Props) {
  const trainers = await prisma.benefit.findMany({
    where: {
      gymId: params.gymId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedTrainers: BenefitColumn[] = trainers.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 md:p-8 md:pt-6 p-2">
        <BenefitClient items={formattedTrainers} />
      </div>
    </div>
  );
}
