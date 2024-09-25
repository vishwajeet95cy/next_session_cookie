import { changePremium, changeUsername, getSession } from "@/actions";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="profile flex items-center gap-2 flex-col">
      <h1>Welcome to the Profilepage</h1>
      <p className="text-gray-300">
        Welcome, <b className="text-white">{session.username}</b>
      </p>
      <span className="text-gray-300">
        Your are a{" "}
        <b className={`${session.isPro ? "text-green-600" : "text-white"}`}>
          {session.isPro ? "Premium" : "Free"}
        </b>{" "}
        user
      </span>
      <form action={changePremium}>
        <button className="self-start bg-white text-black shadow-md rounded-md px-2 py-1 hover:bg-black hover:text-white border-1 border-white">
          {session.isPro ? "Cancel" : "Buy"} Premium
        </button>
      </form>
      <form className="flex gap-2" action={changeUsername}>
        <input
          className="px-2 py-1"
          type="text"
          name="username"
          required
          placeholder={session.username}
        />
        <button className=" bg-white text-black shadow-md rounded-md px-2 py-1 hover:bg-black hover:text-white border-1 border-white">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
