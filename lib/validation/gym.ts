import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
  imageUrl: z.string().min(1),
  type: z.string().min(1),
});
