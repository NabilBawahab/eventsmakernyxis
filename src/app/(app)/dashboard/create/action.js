"use server";

import { auth } from "@/libs/auth";
import { prisma } from "@/utils/prisma";

export async function createEventAction(_, formData) {
  const name = formData.get("name");
  const image = formData.get("image");
  const eventDate = formData.get("eventDate");
  const description = formData.get("description");

  const session = await auth();

  if (!session) {
    return {
      success: false,
      message: "You must be logged in to create an event",
    };
  }

  if (!name || !eventDate || !description) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  try {
    await prisma.event.create({
      data: {
        name,
        eventDate: new Date(eventDate),
        description,
        imageUrl: image.size !== 0 ? image.name : "", // jika image tidak ada akan di return string kosong ""
        authorId: session.user.id,
      },
    });
  } catch (error) {
    console.log("User error create event", error);
  }
  return {
    success: true,
    message: "Event created!",
  };
}
