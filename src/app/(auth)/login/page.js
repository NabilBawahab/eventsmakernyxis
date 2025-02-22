"use client";

import { Button, Input, addToast } from "@heroui/react";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { loginAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  useEffect(() => {
    if (state?.success === true) {
      addToast({
        title: "Login Success",
        description: state?.message,
        variant: "bordered",
        color: "success",
        radius: "sm",
      });
    }
  }, [state?.success]);
  return (
    <form action={formAction} className="space-y-5">
      <section className="text-center">
        <h3 className="font-bold text-lg">Login</h3>
        <p>Sign in to continue</p>
      </section>
      <section className="space-y-5">
        <Input
          name="email"
          type="email"
          variant="underlined"
          placeholder="Email"
        />
        <Input
          name="password"
          variant="underlined"
          type="password"
          placeholder="Password"
        />
        {state?.success === false && (
          <div className="text-center text-danger text-sm p-2 rounded-lg font-normal tracking-tight bg-danger-50">
            {state?.message}
          </div>
        )}
        <Button type="submit" color="primary" fullWidth isLoading={pending}>
          Login
        </Button>
      </section>
      <section>
        <p>
          Don&apos;t have an account ?{" "}
          <Link className="text-primary-500" href="/register">
            Register
          </Link>
        </p>
      </section>
    </form>
  );
}
