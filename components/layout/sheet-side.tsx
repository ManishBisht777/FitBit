"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Sidebar from "./sidebar";
import { SidebarConfig } from "@/config/sidebar";
import { Separator } from "../ui/separator";

type Props = {};

export default function SheetSide({}: Props) {
  const params = useParams();

  const routes = [
    {
      href: `/dashboard/${params.gymId}`,
      label: "Overview",
    },
    {
      href: `/dashboard/${params.gymId}/billboards`,
      label: "Billboards",
    },
    {
      href: `/dashboard/${params.gymId}/trainers`,
      label: "Trainers",
    },
    {
      href: `/dashboard/${params.gymId}/benefits`,
      label: "Benefits",
    },
    {
      href: `/dashboard/${params.gymId}/plans`,
      label: "Plans",
    },
    {
      href: `/dashboard/${params.gymId}/settings`,
      label: "Settings",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-start">Rhinos Gym</SheetTitle>
        </SheetHeader>
        <nav className="my-6 flex flex-col gap-1 flex-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn("transition-colors hover:text-primary")}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <Separator />
        <Sidebar items={SidebarConfig} />
      </SheetContent>
    </Sheet>
  );
}
