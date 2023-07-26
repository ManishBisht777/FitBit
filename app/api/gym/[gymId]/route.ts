import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    const body = await req.json();

    const { name } = body;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.gymId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const gym = await prisma.gym.updateMany({
      where: {
        id: params.gymId,
        userId: user.id,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(gym);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { gymId: string } }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!params.gymId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const gym = await prisma.gym.delete({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    return NextResponse.json(gym);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
