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
import { Benefit } from "@prisma/client";
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
});

type BenefitFormValues = z.infer<typeof formSchema>;

interface BenefitFormProps {
  initialData: Benefit | null;
}

export default function BenefitForm({ initialData }: BenefitFormProps) {
  const form = useForm<BenefitFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  const title = initialData ? "Edit Benefit Info" : "Create New Benefit";
  const description = initialData
    ? "Edit your Gym Benefit."
    : "Add a new Benefit For your Gym";
  const toastMessage = initialData ? "Benefit updated." : "Benefit created.";
  const action = initialData ? "Save changes" : "Create";

  const onSubmit = async (data: BenefitFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.gymId}/benefits/${params.benefitId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.gymId}/benefits`, data);
      }
      router.refresh();
      router.push(`/dashboard/${params.gymId}/benefits`);
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
      await axios.delete(`/api/${params.gymId}/benefits/${params.benefitId}`);
      router.refresh();
      router.push(`/dashboard/${params.gymId}/benefits`);
      toast({
        title: "Benefits Deleted",
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Benefit name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-4" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
}
