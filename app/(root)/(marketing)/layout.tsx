import SiteNavbar from "@/components/layout/navbar";
import { buttonVariants } from "@/components/ui/button";
import { UserAccountNav } from "@/components/user-account-menu";
import { NavbarConfig } from "@/config/navbar";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}
export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 mt-4 rounded-full flex justify-between">
        <SiteNavbar items={NavbarConfig} />
        {!user ? (
          <Link href="/login" className={cn(buttonVariants(), "rounded-full")}>
            Login
          </Link>
        ) : (
          <UserAccountNav user={user} />
        )}
      </header>
      <main className="flex-1">{children}</main>
      footer
      {/* <SiteFooter /> */}
    </div>
  );
}
