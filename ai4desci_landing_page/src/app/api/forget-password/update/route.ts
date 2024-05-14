import { prisma } from "@/app/libs/prismaDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Email does not exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        hashedPassword,
        passwordResetToken: null,
        passwordResetTokenExp: null,
      },
    } as any);

    return NextResponse.json("Password Updated", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
