import { prisma } from "@/utils/prisma";
import { EventCard } from "../_components/event-card";

export const SectionEvents = async () => {
  let events = [];
  try {
    events = await prisma.event.findMany();
  } catch (error) {
    console.log("Error fetching events", error);
  }

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.name}
            datetime={event.eventDate.toString()}
            location={event.description}
          />
        );
      })}
    </div>
  );
};
