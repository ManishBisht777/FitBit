import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

interface MobileNavProps {
  items: NavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  return (
    <div className="relative z-20 grid py-4 gap-6 rounded-md bg-popover text-popover-foreground shadow-md">
      <nav className="grid grid-flow-row auto-rows-max text-sm">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex w-full rounded-md py-2 text-sm font-medium hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
