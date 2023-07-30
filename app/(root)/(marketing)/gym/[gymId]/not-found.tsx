import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bird } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container h-[70vh] flex justify-center flex-col items-center">
      <Bird className="h-52 w-52 text-primary" />
      <h2 className="text-3xl font-medium">Not Found</h2>
      <p className="text-lg text-primary/50">Could not find requested gym</p>
      <Link href="/gyms" className={cn(buttonVariants(), "mt-4")}>
        View all gyms
      </Link>
    </div>
  );
}
