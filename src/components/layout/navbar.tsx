"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="w-full px-4 md:px-8">
        <div className="flex h-[4.7rem] w-full items-center justify-between gap-3 text-white">
          <Link
            href="/"
            className="flex items-center font-semibold tracking-tight"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-11 w-[220px] overflow-hidden rounded-md">
              <Image
                src="/pixern-logo.png"
                alt="Pixern Technology"
                fill
                sizes="220px"
                className="object-cover object-center"
                priority
              />
            </div>
          </Link>

          <nav className="mx-6 hidden flex-1 items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] p-1.5 text-[15px] font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "nav-link flex-1 rounded-full border border-sky-300/40 bg-gradient-to-r from-sky-500/90 to-blue-600/90 px-5 py-2 text-center text-white shadow-[0_10px_18px_-14px_rgba(14,165,233,0.8)]"
                      : "nav-link flex-1 rounded-full px-5 py-2 text-center text-slate-200 transition-all duration-200 hover:bg-white/10 hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-gradient-to-r from-[#f97316] to-[#f59e0b] px-5 py-2 text-sm font-bold text-white shadow-[0_14px_26px_-16px_rgba(249,115,22,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start Project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-lg font-semibold leading-none">{open ? "X" : "="}</span>
          </button>
        </div>
      </div>
      {open ? (
        <div className="w-full px-4 pb-4 md:hidden">
          <nav className="mt-2 grid gap-1 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.85)] backdrop-blur">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === item.href
                    ? "rounded-xl bg-gradient-to-r from-[#12315f] to-[#1f5f95] px-3 py-2 text-sm font-semibold text-white"
                    : "rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-[#f97316] to-[#f59e0b] px-6 py-2.5 text-sm font-bold text-white"
            >
              Start Project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
