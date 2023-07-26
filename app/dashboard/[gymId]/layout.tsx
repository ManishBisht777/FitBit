import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { gymId: string };
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const store = await prisma.gym.findFirst({
    where: {
      id: params.gymId,
      userId: user.id,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      {/* <Navbar /> */}
      Navbar
      {children}
    </>
  );
}
