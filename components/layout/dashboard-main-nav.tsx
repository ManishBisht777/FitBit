"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

type Props = {};

export default function DashboardMainNav({}: Props) {
  const params = useParams();
  const pathname = usePathname();

  const routes = [
    {
      href: `/dashboard/${params.gymId}`,
      label: "Overview",
      active: pathname === `/dashboard/${params.gymId}`,
    },
    {
      href: `/dashboard/${params.gymId}/billboards`,
      label: "Billboards",
      active: pathname === `/dashboard/${params.gymId}/billboards`,
    },
    {
      href: `/dashboard/${params.gymId}/trainers`,
      label: "Trainers",
      active: pathname === `/dashboard/${params.gymId}/trainers`,
    },
    {
      href: `/dashboard/${params.gymId}/benefits`,
      label: "Benefits",
      active: pathname === `/dashboard/${params.gymId}/benefits`,
    },
    {
      href: `/dashboard/${params.gymId}/plans`,
      label: "Plans",
      active: pathname === `/dashboard/${params.gymId}/plans`,
    },
    {
      href: `/dashboard/${params.gymId}/settings`,
      label: "Settings",
      active: pathname === `/dashboard/${params.gymId}/settings`,
    },
  ];

  return (
    <nav className="ml-6 md:flex hidden items-center  space-x-4 lg:space-x-6 flex-1">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-primary" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
