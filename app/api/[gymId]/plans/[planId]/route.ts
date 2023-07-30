import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { trainerId: string; gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!params.trainerId)
      return new NextResponse("trainer id required", { status: 400 });

    const gymByUserId = await prisma.gym.findFirst({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    if (!gymByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const trainer = await prisma.trainer.delete({
      where: {
        id: params.trainerId,
      },
    });
    return NextResponse.json(trainer);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { trainerId: string; gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    const body = await req.json();

    const { name, role, imageUrl } = body;

    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!name) return new NextResponse("name required", { status: 400 });
    if (!role) return new NextResponse("name required", { status: 400 });
    if (!imageUrl)
      return new NextResponse("ImageUrl required", { status: 400 });
    if (!params.trainerId)
      return new NextResponse("trainer id required", { status: 400 });

    const gymByUserId = await prisma.gym.findFirst({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    if (!gymByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const trainer = await prisma.trainer.update({
      where: {
        id: params.trainerId,
      },
      data: {
        name,
        imageUrl,
        role,
      },
    });

    return NextResponse.json(trainer);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
