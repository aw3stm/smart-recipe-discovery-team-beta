import Link from "next/link";
import MainNav from "@/components/layout/MainNav";

export default function SiteHeader() {
  return (
    <header className="border-b border-[#D9D9D9] bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4">
        <Link
          href="/"
          className="flex min-h-11 items-center text-xl font-bold focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
        >
          FlavorCraft
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
