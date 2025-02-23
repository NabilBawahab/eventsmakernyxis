import { prisma } from "@/utils/prisma";

export default async function Page({ params }) {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });

  return (
    <div>
      <h3>{event.name}</h3>
      <p>{event.eventDate.toString()}</p>
      <p>{event.description}</p>
    </div>
  );
}
