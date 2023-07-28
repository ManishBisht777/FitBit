import SiteNavbar from "@/components/layout/navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 mt-4 rounded-full">
        <div className="flex h-20 items-center justify-between py-6">
          <p className="font-heading md:text-2xl tracking-tight uppercase font-black text-primary">
            Rhinos gym
          </p>
          <SiteNavbar />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      footer
      {/* <SiteFooter /> */}
    </div>
  );
}
