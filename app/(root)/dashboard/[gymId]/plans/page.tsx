import { prisma } from "@/lib/db";
import { TrainerColumn } from "./columns";
import { format } from "date-fns";
import TrainerClient from "./trainer-client";

type Props = {
  params: {
    gymId: string;
  };
};

export default async function Trainers({ params }: Props) {
  const trainers = await prisma.trainer.findMany({
    where: {
      gymId: params.gymId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedTrainers: TrainerColumn[] = trainers.map((item) => ({
    id: item.id,
    name: item.name,
    role: item.role,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <TrainerClient items={formattedTrainers} />
      </div>
    </div>
  );
}
