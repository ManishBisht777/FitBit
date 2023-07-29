import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { benefitId: string; gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!params.benefitId)
      return new NextResponse("benefit id required", { status: 400 });

    const gymByUserId = await prisma.gym.findFirst({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    if (!gymByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const benefit = await prisma.benefit.delete({
      where: {
        id: params.benefitId,
      },
    });
    return NextResponse.json(benefit);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { benefitId: string; gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    const body = await req.json();

    const { name } = body;

    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!name) return new NextResponse("name required", { status: 400 });

    if (!params.benefitId)
      return new NextResponse("benefit id required", { status: 400 });

    const gymByUserId = await prisma.gym.findFirst({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    if (!gymByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const benefit = await prisma.benefit.update({
      where: {
        id: params.benefitId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(benefit);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
