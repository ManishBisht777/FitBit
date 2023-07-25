"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { PlanCreateSchema } from "@/types/validation/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "../icons";

import * as DialogPrimitive from "@radix-ui/react-dialog";

type PlanCreateValues = z.infer<typeof PlanCreateSchema>;

type Props = {};

export default function PlanCreateForm({}: Props) {
  const form = useForm<PlanCreateValues>({
    resolver: zodResolver(PlanCreateSchema),
  });

  function onSubmit(data: PlanCreateValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-5 mt-4">
          <div className="w-32 h-32 bg-slate-700 rounded-xl flex justify-center items-center">
            <Icons.Image />
          </div>
          <div className="flex flex-col gap-3">
            <p>Plan Name and Price</p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Plan name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Plan Price"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description {"(Optional)"}</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Description ..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <DialogPrimitive.Close className="data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <span className="sr-only">Cancel</span>
            <Button variant="destructive" className="w-full">
              Cancel
            </Button>
          </DialogPrimitive.Close>
          <Button variant="secondary" type="submit">
            Create Plan
          </Button>
        </div>
      </form>
    </Form>
  );
}
