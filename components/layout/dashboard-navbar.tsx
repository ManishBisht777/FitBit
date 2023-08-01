import { getCurrentUser } from "@/lib/session";
import { GymSwitcher } from "../gym-switcher";
import { UserAccountNav } from "../user-account-menu";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import DashboardMainNav from "./dashboard-main-nav";
import SheetSide from "./sheet-side";

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
      <div className="flex h-16 justify-between items-center md:px-4">
        <div className="flex gap-2 items-center">
          <SheetSide />
          <GymSwitcher items={gyms} />
        </div>
        <DashboardMainNav />
        <UserAccountNav user={user} />
      </div>
    </div>
  );
}
