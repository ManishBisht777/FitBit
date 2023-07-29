"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validation/gym";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import ImageUpload from "@/components/image-upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { gymCategories } from "@/config/category";

type Props = {};

export default function DashboardNew({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      type: "",
    },
  });

  const { toast } = useToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/gym", values);

      toast({
        title: "Gym Created SuccessFully",
      });

      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  return (
    <section className="container flex flex-col justify-center max-w-3xl h-screen overflow-hidden">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Create a Gym</h1>
        <p className="text-sm text-primary/70">
          Create a gym to access it on dashboard
        </p>
      </div>
      <Form {...form}>
        <form
          className="w-full p-4 border rounded-lg flex flex-col gap-6 items-start mt-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Trainer image</FormLabel> */}
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={isLoading}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Gym Name</FormLabel>
                    <p className="text-sm text-primary/50">
                      Enter your Gym name or a display name you are comfortable
                      with
                    </p>
                    <FormControl>
                      <Input placeholder="Rhino's Gym" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Gym Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            className="text-primary"
                            placeholder="Select a verified email to display"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {gymCategories &&
                          gymCategories.map((category) => (
                            <SelectItem
                              key={category.title}
                              value={category.title}
                            >
                              {category.title}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="self-end">
            <Button className="px-6 mr-3" type="submit">
              {isLoading && (
                <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
              )}
              Create
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
