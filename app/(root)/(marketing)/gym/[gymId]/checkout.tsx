"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";

type Props = {
  items: string;
};

export default function Checkout({ items }: Props) {
  const params = useParams();

  const onCheckout = async () => {
    const response = await axios.post(`/api/${params.gymId}/checkout`, {
      planIds: [items],
    });

    window.location = response.data.url;
  };
  return (
    <Button
      onClick={onCheckout}
      variant="outline"
      className="px-8 md:text-base text-xs bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent hover:bg-clip-border hover:text-primary-foreground"
    >
      Try Now
    </Button>
  );
}
