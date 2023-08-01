import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
  req: Request,
  { params }: { params: { gymId: string } }
) {
  const { planIds } = await req.json();

  if (!planIds || planIds.length === 0) {
    return new NextResponse("planIds ids are required", { status: 400 });
  }

  const products = await prisma.plan.findMany({
    where: {
      id: {
        in: planIds,
      },
    },
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  products.forEach((plan) => {
    line_items.push({
      quantity: 1,
      price_data: {
        currency: "INR",
        product_data: {
          name: plan.name,
        },
        unit_amount: plan.price.toNumber() * 100,
      },
    });
  });

  const order = await prisma.order.create({
    data: {
      gymId: params.gymId,
      isPaid: false,
      orderItems: {
        create: planIds.map((planId: string) => ({
          plan: {
            connect: {
              id: planId,
            },
          },
        })),
      },
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${process.env.FRONTEND_STORE_URL}/dashboard`,
    cancel_url: `${process.env.FRONTEND_STORE_URL}/dashboarrd`,
    metadata: {
      orderId: order.id,
    },
  });

  return NextResponse.json(
    { url: session.url },
    {
      headers: corsHeaders,
    }
  );
}
