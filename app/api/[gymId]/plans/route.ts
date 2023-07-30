import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { gymId: string } }
) {
  try {
    if (!params.gymId) {
      return new NextResponse("Gym id is required", { status: 400 });
    }

    const plans = await prisma.plan.findMany({
      where: {
        gymId: params.gymId,
      },
    });

    return NextResponse.json(plans);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { gymId: string } }
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

    const plan = await prisma.plan.create({
      data: {
        name,
        description,
        price,
        gymId: params.gymId,
        images: {
          createMany: {
            data: imgs,
          },
        },
      },
    });

    return NextResponse.json(plan);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
