import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    const body = await req.json();

    const { name, imageUrl, type } = body;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!name) return new NextResponse("Name is required", { status: 400 });
    if (!imageUrl)
      return new NextResponse("Image url is required", { status: 400 });
    if (!type) return new NextResponse("Type is required", { status: 400 });

    const store = await prisma.gym.create({
      data: {
        name,
        userId: user.id,
        imageUrl,
        type,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
