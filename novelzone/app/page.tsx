"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "/home";
    }, 500);

    return () => clearTimeout(redirectTimer);
  }, []);
  return (
    <div className="h-screen grid place-items-center">
      <div>
        {" "}
        <h2 className="text-typography text-4xl">Novel Zone</h2>
        <p>Welcome to Novel Zone.</p>
      </div>
    </div>
  );
}
