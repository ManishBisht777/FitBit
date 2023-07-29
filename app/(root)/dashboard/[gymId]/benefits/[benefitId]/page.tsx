import BenefitForm from "@/components/forms/benefit-form";
import { prisma } from "@/lib/db";

interface TrainerProps {
  params: {
    benefitId: string;
  };
}

export default async function Benefit({ params }: TrainerProps) {
  const benefit = await prisma.benefit.findUnique({
    where: {
      id: params.benefitId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BenefitForm initialData={benefit} />
      </div>
    </div>
  );
}
