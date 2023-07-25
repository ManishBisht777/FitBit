"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import PlanCreateForm from "@/components/forms/plan-create-form";

type PlansProps = {};

export default function Plans({}: PlansProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create New Plan</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create A plan</DialogTitle>
            <DialogDescription>
              Create a new plan for Rhino Gym
            </DialogDescription>
          </DialogHeader>
          <PlanCreateForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
