import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlavorCraft",
  description: "Discover, explore and save your favourite recipes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
