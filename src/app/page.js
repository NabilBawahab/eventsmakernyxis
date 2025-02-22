import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h3>Hello!</h3>
      <Link href="/login">Sign In</Link>
      <Link href="/register">Sign Up</Link>
    </div>
  );
}
