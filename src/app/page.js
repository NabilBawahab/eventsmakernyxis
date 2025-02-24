import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/dashboard");
  // return (
  //   <div>
  //     <h3>Hello!</h3>
  //     <Link href="/login">Sign In</Link>
  //     <Link href="/register">Sign Up</Link>
  //   </div>
  // );
}
