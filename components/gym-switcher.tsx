"use client";

import { useState } from "react";
import { Gym } from "prisma/prisma-client";
import { useParams, useRouter } from "next/navigation";
import { Check, ChevronsUpDown, PlusCircle, School2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface GymSwitcherProps {
  items: Gym[];
}

export function GymSwitcher({ items }: GymSwitcherProps) {
  const [open, setOpen] = useState(false);

  const params = useParams();
  const router = useRouter();

  const currentGym = items.find((item) => item.id === params.gymId);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="md:w-[200px] w-[150px] justify-between"
        >
          <School2 className="mr-2 h-4 w-4" />
          {currentGym?.name}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-[200px] w-[150px] p-0">
        <Command>
          <CommandInput placeholder="Search Gym..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {items.map((gym) => (
              <CommandItem
                key={gym.id}
                value={gym.name}
                onSelect={() => {
                  setOpen(false);
                  router.push(`/dashboard/${gym.id}`);
                }}
              >
                {gym.name}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    currentGym?.id === gym.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <Link
                  className="cursor-pointer flex items-center"
                  href="/dashboard/new"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Store
                </Link>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
