"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const path = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start w-full">
          <div className="flex gap-2">
            <h2 className="capitalize font-semibold text-xl ">
              {path === "/home"
                ? "Home"
                : path === "/search"
                ? "Search"
                : path === "/explore"
                ? "Explore"
                : path === "/setting"
                ? "Setting"
                : ""}
            </h2>
          </div>
          <div className="">
            {path !== "/search" && (
              <Link href={"/search"}>
                <Search />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
