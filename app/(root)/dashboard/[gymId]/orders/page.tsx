import { prisma } from "@/lib/db";
import { format } from "date-fns";
import { OrderColumn } from "./columns";
import OrderClient from "./order-client";

type Props = {
  params: {
    gymId: string;
  };
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default async function Orders({ params }: Props) {
  const orders = await prisma.order.findMany({
    where: {
      gymId: params.gymId,
    },
    include: {
      orderItems: {
        include: {
          plan: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    products: item.orderItems
      .map((orderItem) => orderItem.plan.name)
      .join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        return total + Number(item.plan.price);
      }, 0)
    ),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 md:p-8 md:pt-6 p-2">
        <OrderClient items={formattedOrders} />
      </div>
    </div>
  );
}
