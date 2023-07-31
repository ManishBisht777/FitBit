"use client";

import { NavbarConfig } from "@/config/navbar";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "../icons";
import { MobileNav } from "./mobile-nav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type Props = {
  items?: NavItem[];
  children?: React.ReactNode;
};

export default function SiteNavbar({ items, children }: Props) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <nav className="flex md:gap-8 items-center justify-between">
      <div className="md:flex hidden h-20 items-center gap-10">
        <p className="font-heading md:text-2xl tracking-tight uppercase font-black text-primary">
          Rhinos gym
        </p>
        <div className="flex  md:gap-8 items-center">
          {NavbarConfig.map((item: NavItem, index: number) => {
            return (
              <Link
                key={index}
                className={cn(
                  "hover:text-primary text-primary/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
                href={item.href}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex md:hidden">Menu</button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-start">Rhinos Gym</SheetTitle>
          </SheetHeader>
          {items && <MobileNav items={items}>{children}</MobileNav>}
        </SheetContent>
      </Sheet>
    </nav>
  );
}
