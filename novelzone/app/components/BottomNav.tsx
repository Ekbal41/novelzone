"use client";

import { CircleGauge, HomeIcon, Search, Settings } from "lucide-react";

export default function BottomNav() {
  return (
    <footer className="bg-white shadow-sm fixed bottom-0 right-0 left-0">
      <div className="flex justify-between items-start w-full border-t-[1px] p-4">
        <div>
          <HomeIcon />
        </div>
        <div>
          <CircleGauge />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Settings />
        </div>
      </div>
    </footer>
  );
}
