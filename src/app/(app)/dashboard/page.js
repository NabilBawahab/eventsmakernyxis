import React from "react";
import { SectionEvents } from "../_components/section-events";
import { auth } from "@/libs/auth";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  return (
    <>
      <section className="text-center">
        <h1 className="text-3xl">Discover newest events accross the globe!</h1>
      </section>
      <section className="space-y-4">
        {session ? (
          <div className="flex justify-between">
            <h1>Popular Events</h1>
            <Link href="/dashboard/create">
              <Button>Create your event</Button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-between">
            <h1>Popular Events</h1>
            <Link href="/login">
              <Button>Login to create events</Button>
            </Link>
          </div>
        )}

        <SectionEvents />
      </section>
    </>
  );
}
