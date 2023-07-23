import { NavbarConfig } from "@/config/navbar";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import React from "react";

type Props = {};

export default function SiteNavbar({}: Props) {
  return (
    <nav className="flex md:gap-8 items-center">
      {NavbarConfig.map((item: NavItem, index: number) => {
        return (
          <Link
            key={index}
            className={cn(
              "hover:text-slate-900 text-slate-700",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
            href={item.href}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
