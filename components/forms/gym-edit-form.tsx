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
import { useParams, useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Gym } from "@prisma/client";
import { AlertModal } from "../modals/alert-modal";
import ImageUpload from "../image-upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { gymCategories } from "@/config/category";

type Props = {
  initialData: Gym;
};

export default function GymEditForm({ initialData }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData.name,
      imageUrl: initialData.imageUrl,
      type: initialData.type,
    },
  });

  const { toast } = useToast();
  const params = useParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await axios.patch(`/api/gym/${params.gymId}`, values);

      router.refresh();
      toast({
        title: "Gym Updated SuccessFully",
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  const onDelete = async () => {
    try {
      setDeleteLoading(true);
      await axios.delete(`/api/gym/${params.gymId}`);

      router.refresh();
      router.push("/dashboard");
      toast({
        title: "Gym Deleted",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Make sure you removed all Plans and Trainer first.",
      });
    } finally {
      setDeleteLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={deleteLoading}
      />

      <Form {...form}>
        <form
          className="w-full p-4 border rounded-lg flex flex-col gap-6 items-start mt-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex md:flex-row flex-col gap-4">
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
                    <FormLabel className="md:text-lg text-base">
                      Gym Name
                    </FormLabel>
                    <p className="md:text-sm text-xs text-primary/50">
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
                    <FormLabel className="md:text-lg text-base">
                      Gym Type
                    </FormLabel>
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
          <div className="self-end flex gap-2">
            <Button
              onClick={() => setOpen(true)}
              variant="destructive"
              className="px-6 mr-2"
              type="button"
            >
              {deleteLoading && (
                <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
              )}
              Delete Store
            </Button>
            <Button className="px-6 mr-3" type="submit">
              {isLoading && (
                <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
              )}
              Update
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
