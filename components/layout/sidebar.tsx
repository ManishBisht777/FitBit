"use client";

import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export default function sidebar({ items }: DashboardNavProps) {
  const path = usePathname();

  return (
    <div className="grid items-start gap-2 text-primary/90 mr-4 mt-4">
      {items.map((item, index) => {
        //@ts-ignore
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-700/50",
                  path === item.href ? "bg-slate-700/50" : "transparent"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </div>
  );
}
