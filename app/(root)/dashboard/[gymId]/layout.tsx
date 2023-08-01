import DashboardNavbar from "@/components/layout/dashboard-navbar";
import Sidebar from "@/components/layout/sidebar";
import { SidebarConfig } from "@/config/sidebar";
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
    <div className="container">
      <DashboardNavbar />
      <div className="md:px-4 flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-6 lg:gap-10 ">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <Sidebar items={SidebarConfig} />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
