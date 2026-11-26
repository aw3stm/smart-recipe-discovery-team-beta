// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { getAllRecipes } from "@/lib/api";
import Home from "./page";

vi.mock("@/lib/api", () => ({
  getAllRecipes: vi.fn(),
}));

describe("Home page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(getAllRecipes).mockResolvedValue([]);
  });

  it("renders the FlavorCraft heading", async () => {
    render(await Home());

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "FlavorCraft",
      }),
    ).toBeInTheDocument();
  });

  it("fetches recipes using the API service", async () => {
    render(await Home());

    expect(getAllRecipes).toHaveBeenCalledTimes(1);
  });

  it("displays an empty state when no recipes are available", async () => {
    render(await Home());

    expect(screen.getByText("No recipes available.")).toBeInTheDocument();
  });
});
