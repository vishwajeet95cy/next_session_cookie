import LoginForm from "@/components/loginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className=" container login flex items-center flex-col gap-2">
      <h1>Welcome to the Loginpage</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
