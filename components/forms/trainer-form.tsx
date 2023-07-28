"use client";

import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { Separator } from "../ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Trainer } from "@prisma/client";
import { useState } from "react";
import ImageUpload from "../image-upload";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { AlertModal } from "../modals/alert-modal";

const formSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  imageUrl: z.string().min(1),
});

type TrainerFormValues = z.infer<typeof formSchema>;

interface TrainerFormProps {
  initialData: Trainer | null;
}

export default function TrainerForm({ initialData }: TrainerFormProps) {
  const form = useForm<TrainerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      role: "",
      imageUrl: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  const title = initialData ? "Edit Trainer Info" : "Create New Trainer";
  const description = initialData
    ? "Edit your Gym Trainer."
    : "Add a new Trainer For your Gym";
  const toastMessage = initialData ? "Trainer updated." : "Trainer created.";
  const action = initialData ? "Save changes" : "Create";

  const onSubmit = async (data: TrainerFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.gymId}/trainers/${params.billboardId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.gymId}/trainers`, data);
      }
      router.refresh();
      router.push(`/dashboard/${params.gymId}/trainers`);
      toast({
        title: toastMessage,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(`/api/${params.gymId}/trainers/${params.billboardId}`);
      router.refresh();
      router.push(`/dashboard/${params.gymId}/billboards`);
      toast({
        title: "Billboard Deleted",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button variant="destructive" size="sm" onClick={() => setOpen(true)}>
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full flex gap-8"
        >
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Trainer image</FormLabel> */}
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Trainer name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Input placeholder="Trainer Role" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="mt-4" type="submit">
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
