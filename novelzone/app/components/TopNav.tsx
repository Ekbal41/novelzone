"use client";

import { Book, Search } from "lucide-react";

export default function TopNav() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start w-full">
          <div className="flex gap-2">
            <Book />
            <h2 className="uppercase">Novel Zone</h2>
          </div>
          <div className="">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}
