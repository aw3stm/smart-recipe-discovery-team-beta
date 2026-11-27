"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/favourites", label: "Favourites" },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex gap-1">
        {links.map(({ href, label }) => {
          const isCurrent = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isCurrent ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-full px-4 font-medium focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none ${
                  isCurrent ? "bg-[#D9D9D9]" : "hover:bg-[#F2F2F2]"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
