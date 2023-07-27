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

    const billboards = await prisma.billboard.findMany({
      where: {
        gymId: params.gymId,
      },
    });

    return NextResponse.json(billboards);
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error);
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

    const { label, imageUrl } = body;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!label) {
      return new NextResponse("Label is required", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

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

    const billboard = await prisma.billboard.create({
      data: {
        label,
        imageUrl,
        gymId: params.gymId,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
