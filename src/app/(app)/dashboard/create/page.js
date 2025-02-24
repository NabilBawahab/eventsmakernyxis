"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { useActionState } from "react";
import { createEventAction } from "./action";
import { redirect } from "next/navigation";

export default function Page() {
  const [state, formAction, pending] = useActionState(createEventAction, null);

  if (state?.success === true) {
    return setTimeout(() => {
      redirect("/dashboard"), 1000;
    });
  }
  return (
    <div>
      <form className="space-y-2" action={formAction}>
        <Input name="name" placeholder="Input your title" />
        <Input name="image" type="file" />
        <Input name="eventDate" type="datetime-local" />
        <Textarea name="description" placeholder="description" />
        <Button type="submit" color="primary" isLoading={pending}>
          Submit event
        </Button>
        {state?.success === false && (
          <div className="text-small text-rose-500">{state.message}</div>
        )}
        {state?.success === true && (
          <div className="text-small text-emerald-500 ">{state.message}</div>
        )}
      </form>
    </div>
  );
}
