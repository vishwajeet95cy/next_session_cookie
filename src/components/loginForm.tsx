"use client";
import { login } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input
        className=" border-none outline-none p-1 text-black"
        type="text"
        name="username"
        placeholder="username"
        required
      />
      <input
        className=" border-none outline-none p-1 text-black"
        type="password"
        name="password"
        placeholder="password"
        required
      />
      <button className=" self-start bg-white text-black rounded-md px-2 py-1 hover:bg-black hover:text-white hover:border hover:border-white">
        Login
      </button>
      {state?.error && (
        <p className="text-red-600 text-[12px]">{state.error}</p>
      )}
    </form>
  );
};

export default LoginForm;
