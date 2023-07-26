import { getCurrentUser } from "@/lib/session";
import { GymSwitcher } from "../gym-switcher";
import { UserAccountNav } from "../user-account-menu";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

type DashboardNavbarProps = {};

export default async function DashboardNavbar({}: DashboardNavbarProps) {
  const user = await getCurrentUser();

  if (!user) redirect("login");

  const gyms = await prisma.gym.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 justify-between items-center px-4">
        <GymSwitcher items={gyms} />
        {/* <MainNav className="mx-6" /> */}
        <UserAccountNav user={user} />
      </div>
    </div>
  );
}
