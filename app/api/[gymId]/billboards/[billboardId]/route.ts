import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { billboardId: string; gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!params.billboardId)
      return new NextResponse("billboard id required", { status: 400 });

    const gymByUserId = await prisma.gym.findFirst({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    if (!gymByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const billboard = await prisma.billboard.delete({
      where: {
        id: params.billboardId,
      },
    });
    return NextResponse.json(billboard);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { billboardId: string; gymId: string } }
) {
  try {
    const user = await getCurrentUser();
    const body = await req.json();

    const { label, imageUrl } = body;

    if (!user) return new NextResponse("Unauthorized", { status: 403 });
    if (!label) return new NextResponse("Label required", { status: 400 });
    if (!imageUrl)
      return new NextResponse("ImageUrl required", { status: 400 });
    if (!params.billboardId)
      return new NextResponse("billboard id required", { status: 400 });

    const gymByUserId = await prisma.gym.findFirst({
      where: {
        id: params.gymId,
        userId: user.id,
      },
    });

    if (!gymByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const billboard = await prisma.billboard.update({
      where: {
        id: params.billboardId,
      },
      data: {
        label,
        imageUrl,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
