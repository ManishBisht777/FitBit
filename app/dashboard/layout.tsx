import { Icons } from "@/components/icons";
import { DashboardNav } from "@/components/layout/side-bar";
import { SidebarConfig } from "@/config/sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="container md:px-0 px-4 flex flex-1 gap-12 mt-4">
      <aside className="hidden flex-col md:flex gap-10 text-primary-foreground items-center">
        <Icons.Hexagon className="w-10 h-10 mt-10" />
        <DashboardNav items={SidebarConfig} />
      </aside>
      <main className="flex w-full flex-1 flex-col overflow-hidden text-primary-foreground pt-10">
        {children}
      </main>
    </div>
  );
}
