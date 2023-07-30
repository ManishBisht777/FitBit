import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { planId: string; gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!params.planId)
      return new NextResponse("plan id required", { status: 400 });

    const gymByUserId = await prisma.gym.findFirst({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    if (!gymByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const plan = await prisma.plan.delete({
      where: {
        id: params.planId,
      },
    });
    return NextResponse.json(plan);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { planId: string; gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    const body = await req.json();

    const { name, description, price, images } = body;

    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!name) return new NextResponse("name is required", { status: 400 });
    if (!description)
      return new NextResponse("description is required", { status: 400 });
    if (!price) return new NextResponse("price is required", { status: 400 });
    if (!images && !images.length())
      return new NextResponse("images is required", { status: 400 });

    if (!params.gymId) {
      return new NextResponse("Gym id is required", { status: 400 });
    }

    const storeByUserId = await prisma.gym.findFirst({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const imgs = images.map((image: { url: string }) => image);

    await prisma.plan.update({
      where: {
        id: params.planId,
      },
      data: {
        name,
        description,
        price,
        gymId: params.gymId,
        images: {
          deleteMany: {},
        },
      },
    });

    const plan = await prisma.plan.update({
      where: {
        id: params.planId,
      },
      data: {
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(plan);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
