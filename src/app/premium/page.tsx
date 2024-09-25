import { getSession } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  if (!session.isPro) {
    return (
      <div className="flex items-center flex-col gap-2">
        <h1 className="text-2xl">Only Premium users can see the content!</h1>
        <Link href="/profile">
          Go to the profile page to upgrade to premiun
        </Link>
      </div>
    );
  }

  return (
    <div className="premium flex items-center gap-2">
      <h1 className="text-2xl">Welcome to the PremiumPage</h1>
    </div>
  );
};

export default PremiumPage;
