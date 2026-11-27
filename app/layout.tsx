import type { Metadata } from "next";
import "./globals.css";
import SkipLink from "@/components/layout/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "FlavorCraft",
  description: "Discover, explore and save your favourite recipes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <SiteHeader />
        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 focus:outline-none"
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
