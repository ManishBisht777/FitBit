"use client";

import { DashboardNav } from "@/components/layout/side-bar";
import { SidebarConfig } from "@/config/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <SiteHeader user={user} /> */}
      <h1>Header</h1>
      <div className="container flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-6 lg:gap-10 ">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <DashboardNav items={SidebarConfig} />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
      {/* <SiteFooter /> */}
      <h6>Footer</h6>
    </div>
  );
}
