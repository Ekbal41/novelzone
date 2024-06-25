"use client";

import { CircleGauge, HomeIcon, Search, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const path = usePathname();
  return (
    <footer className="bg-white shadow-sm fixed bottom-0 right-0 left-0">
      <div className="flex justify-between items-start w-full border-t-[1px] p-4">
        <Link href={"/home"}>
          <HomeIcon className={`${path === "/home" ? "text-primary" : ""}`} />
        </Link>
        <Link href={"/explore"}>
          <CircleGauge
            className={`${path === "/explore" ? "text-primary" : ""}`}
          />
        </Link>
        <Link href={"/search"}>
          <Search className={`${path === "/search" ? "text-primary" : ""}`} />
        </Link>
        <Link href={"/setting"}>
          <Settings
            className={`${path === "/setting" ? "text-primary" : ""}`}
          />
        </Link>
      </div>
    </footer>
  );
}
