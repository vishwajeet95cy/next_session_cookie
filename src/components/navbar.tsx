import Link from "next/link";
import React from "react";
import LogoutForm from "./logoutform";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="flex items-center gap-5 p-5">
      <Link href="/">Homepage</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      {session.isLoggedIn && <LogoutForm />}
    </nav>
  );
};

export default Navbar;
