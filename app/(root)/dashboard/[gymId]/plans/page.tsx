import { prisma } from "@/lib/db";
import { format } from "date-fns";
import PlanClient from "./plan-client";
import { PlanColumn } from "./columns";

type Props = {
  params: {
    gymId: string;
  };
};

export default async function Trainers({ params }: Props) {
  const plans = await prisma.plan.findMany({
    where: {
      gymId: params.gymId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedPlans: PlanColumn[] = plans.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <PlanClient items={formattedPlans} />
      </div>
    </div>
  );
}
