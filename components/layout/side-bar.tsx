"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { SidebarNavItem } from "@/types";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5 px-8 bg-slate-900 py-6 rounded-lg">
      {items.map((item, index) => {
        //@ts-ignore
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.href}>
              <span
                className={cn(
                  "text-primary-foreground/50",
                  path === item.href ? "text-primary-foreground" : "transparent"
                )}
              >
                <Icon className="mx-1 h-6 w-6" />
              </span>
            </Link>
          )
        );
      })}
    </div>
  );
}
