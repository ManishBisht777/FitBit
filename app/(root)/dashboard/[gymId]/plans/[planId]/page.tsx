import PlanForm from "@/components/forms/plan-form";
import { prisma } from "@/lib/db";

interface PlanProps {
  params: {
    planId: string;
    gymId: string;
  };
}

export default async function Plan({ params }: PlanProps) {
  const plan = await prisma.plan.findUnique({
    where: {
      id: params.planId,
    },
    include: {
      images: true,
    },
  });

  const benefits = await prisma.benefit.findMany({
    where: {
      gymId: params.gymId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <PlanForm initialData={plan} benefits={benefits} />
      </div>
    </div>
  );
}
