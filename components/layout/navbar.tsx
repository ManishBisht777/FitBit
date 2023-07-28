import { NavbarConfig } from "@/config/navbar";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { getCurrentUser } from "@/lib/session";
import { UserAccountNav } from "../user-account-menu";

type Props = {};

export default async function SiteNavbar({}: Props) {
  const user = await getCurrentUser();

  return (
    <nav className="flex md:gap-8 items-center">
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
      {!user ? (
        <Link href="/login" className={cn(buttonVariants(), "rounded-full")}>
          Login
        </Link>
      ) : (
        <UserAccountNav user={user} />
      )}
    </nav>
  );
}
