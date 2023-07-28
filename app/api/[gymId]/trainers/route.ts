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

    const trainers = await prisma.trainer.findMany({
      where: {
        gymId: params.gymId,
      },
    });

    return NextResponse.json(trainers);
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

    console.log(params);

    const { name, imageUrl, role } = body;

    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!name) return new NextResponse("name is required", { status: 400 });
    if (!imageUrl)
      return new NextResponse("Image URL is required", { status: 400 });
    if (!role) return new NextResponse("Role is required", { status: 400 });

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

    const trainer = await prisma.trainer.create({
      data: {
        name,
        imageUrl,
        role,
        gymId: params.gymId,
      },
    });

    return NextResponse.json(trainer);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
