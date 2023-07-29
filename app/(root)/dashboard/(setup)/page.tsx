import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div className="container flex h-screen w-full flex-col gap-2 justify-center items-center">
      <Link className={buttonVariants()} href="/dashboard/new">
        Create a Gym
      </Link>
      <p className="text-sm text-primary/70">
        You Currently don't have a gym create a gym to access the dashboard
      </p>
    </div>
  );
}
