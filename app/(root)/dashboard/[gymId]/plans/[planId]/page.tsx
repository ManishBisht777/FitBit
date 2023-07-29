import TrainerForm from "@/components/forms/trainer-form";
import { prisma } from "@/lib/db";

interface TrainerProps {
  params: {
    trainerId: string;
  };
}

export default async function Trainer({ params }: TrainerProps) {
  const trainer = await prisma.trainer.findUnique({
    where: {
      id: params.trainerId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <TrainerForm initialData={trainer} />
      </div>
    </div>
  );
}
