import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-20 flex flex-col md:flex-row items-center">
      <img src="/img/logo.svg" alt="logo" className="max-w-xs" />
      <div className="p-10 w-full md:w-1/2">
        <Outlet />
      </div>
    </main>
  );
}
