import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const store = await prisma.gym.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (store) {
    redirect(`/dashboard/${store.id}`);
  }

  return <>{children}</>;
}
