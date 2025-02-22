"use server";
import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function loginAction(_, formData) {
  const cookieStore = await cookies();

  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "User Not Found",
    };
  }

  const isPassworrdValid = await bcrypt.compare(password, user.password);

  if (!isPassworrdValid) {
    return {
      success: false,
      message: "Invalid Credentials",
    };
  }

  const newSession = await prisma.session.create({
    data: {
      userId: user.id,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 hari
    },
  });

  cookieStore.set("sessionId", newSession.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: true,
  });

  return {
    success: true,
    message: "Yeay you logged in!",
  };
}
