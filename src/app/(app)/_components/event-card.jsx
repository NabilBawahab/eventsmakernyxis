import Link from "next/link";

export const EventCard = ({ id, title, datetime, location }) => {
  return (
    <div className="flex gap-3">
      <Link href={`../dashboard/${id}`}>
        <div className="h-full w-20 h-4 bg-indigo-100 rounded-lg" />
      </Link>
      <div className="space-y-1">
        <h3>{title}</h3>
        <p>{datetime}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
