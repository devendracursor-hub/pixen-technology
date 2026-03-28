import Image from "next/image";
import Link from "next/link";
import { navLinks, siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-100">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-2">
        <div>
          <div className="relative h-16 w-[300px] overflow-hidden rounded-md">
            <Image
              src="/pixern-logo.png"
              alt="Pixern Technology"
              fill
              sizes="300px"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">{siteMeta.description}</p>
        </div>
        <div className="grid gap-4 text-sm md:justify-items-end">
          <div className="flex gap-4">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-slate-300">{siteMeta.email}</p>
          <p className="text-slate-300">{siteMeta.phone}</p>
        </div>
      </div>
    </footer>
  );
}
