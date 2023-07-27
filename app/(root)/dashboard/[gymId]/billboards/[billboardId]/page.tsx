import BillboardForm from "@/components/forms/billboard-form";
import { prisma } from "@/lib/db";

interface BillboardProps {
  params: {
    billboardId: string;
  };
}

export default async function Billboard({ params }: BillboardProps) {
  const billboard = await prisma.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
}
