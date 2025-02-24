import { auth } from "@/libs/auth";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function Layout({ children }) {
  const session = await auth();

  return (
    <>
      <header className="flex justify-between p-2">
        <div>EventMakersNyxis.</div>
        {session ? (
          <div>{session.user.name}</div>
        ) : (
          <Link href={"/login"} className="space-x-2">
            <Button size="sm" color="primary" radius="md">
              Sign in
            </Button>
            <Button size="sm" radius="md">
              Sign Up
            </Button>
          </Link>
        )}
      </header>
      <div className="flex justify-center h-screen items-center">
        <div className="space-y-56"> {children}</div>
      </div>
    </>
  );
}
