import { Heading } from "@/components/ui/heading";
import GymEditForm from "@/components/forms/gym-edit-form";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Settings({
  params,
}: {
  params: { gymId: string };
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("login");
  }
  const gym = await prisma.gym.findFirst({
    where: {
      userId: user.id,
      id: params.gymId,
    },
  });

  if (!gym) redirect("/dashboard");

  return (
    <main className="mt-4">
      <Heading title="Settings" description="Edit store as you like" />
      <GymEditForm initialData={gym} />
    </main>
  );
}
