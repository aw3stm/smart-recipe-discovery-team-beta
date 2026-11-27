// @vitest-environment jsdom

import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import SiteHeader from "./SiteHeader";

const pathname = vi.hoisted(() => ({ current: "/" }));

vi.mock("next/navigation", () => ({
  usePathname: () => pathname.current,
}));

describe("SiteHeader", () => {
  beforeEach(() => {
    pathname.current = "/";
  });

  it("renders a banner landmark with a logo linking home", () => {
    render(<SiteHeader />);
    const header = screen.getByRole("banner");
    expect(
      within(header).getByRole("link", { name: "FlavorCraft" }),
    ).toHaveAttribute("href", "/");
  });

  it("renders a main navigation with Home and Favourites links", () => {
    render(<SiteHeader />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    expect(within(nav).getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(
      within(nav).getByRole("link", { name: "Favourites" }),
    ).toHaveAttribute("href", "/favourites");
  });

  it("marks the current page link with aria-current", () => {
    pathname.current = "/favourites";
    render(<SiteHeader />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    expect(
      within(nav).getByRole("link", { name: "Favourites" }),
    ).toHaveAttribute("aria-current", "page");
    expect(within(nav).getByRole("link", { name: "Home" })).not.toHaveAttribute(
      "aria-current",
    );
  });
});
