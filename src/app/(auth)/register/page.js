"use client";

import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useActionState } from "react";
import { registerAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="space-y-6">
      <section className="space-y-2 text-center">
        <h3 className="font-bold text-lg">Register</h3>
        <p>Create an account to continue</p>
      </section>
      <section className="space-y-2">
        <form className="space-y-5" action={formAction}>
          <Input
            name="name"
            placeholder="Full Name"
            variant="underlined"
            type="text"
          />
          <Input
            name="email"
            placeholder="Email"
            variant="underlined"
            type="email"
          />
          <Input
            name="password"
            placeholder="Password"
            variant="underlined"
            type="password"
          />
          <Button type="submit" fullWidth color="primary" radius="sm">
            Register
          </Button>
          {state?.success === false && (
            <div className="text-small text-rose-500">{state.message}</div>
          )}
          {state?.success === true && (
            <div className="text-small text-emerald-500 ">{state.message}</div>
          )}
        </form>
      </section>
      <section>
        <p>
          Have an account ?{" "}
          <Link className="text-blue-500" href="/login">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
