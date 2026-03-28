"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCta() {
  const pathname = usePathname();
  const hideOn = pathname === "/contact";

  if (hideOn) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <Link
        href="/contact"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#f97316] to-[#f59e0b] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_36px_-18px_rgba(249,115,22,0.9)]"
      >
        Start Project
      </Link>
    </div>
  );
}
