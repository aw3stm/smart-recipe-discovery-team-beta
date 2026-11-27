// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { getAllRecipes } from "@/lib/api";
import type { Recipe } from "@/types/Recipe";
import Home from "./page";

vi.mock("@/lib/api", () => ({
  getAllRecipes: vi.fn(),
}));

const mockRecipe: Recipe = {
  id: "123",
  title: "Margherita Pizza",
  description: "A classic Italian pizza.",
  prepTime: 15,
  cookTime: 20,
  servings: 4,
  difficulty: "Easy",
  category: "Dinner",
  ingredients: [],
  instructions: [],
  tags: [],
  image: {
    url: "/images/fallback-image.webp",
    alt: "Margherita pizza",
  },
  owner: {
    name: "test-user",
    email: "test@example.com",
    bio: null,
    avatar: {
      url: "",
      alt: "",
    },
    banner: {
      url: "",
      alt: "",
    },
  },
  comments: [],
  _count: {
    favorites: 0,
  },
  created: "2026-11-01T00:00:00Z",
  updated: "2026-11-01T00:00:00Z",
};

describe("Home page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(getAllRecipes).mockResolvedValue([]);
  });

  it("renders recipe cards when the API returns data", async () => {
    vi.mocked(getAllRecipes).mockResolvedValue([
      mockRecipe,
      {
        ...mockRecipe,
        id: "456",
        title: "Tomato Soup",
      },
    ]);

    render(await Home());

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getAllByRole("article")).toHaveLength(2);

    expect(
      screen.getByRole("link", { name: "Margherita Pizza" }),
    ).toHaveAttribute("href", "/recipes/123");

    expect(screen.getByRole("link", { name: "Tomato Soup" })).toHaveAttribute(
      "href",
      "/recipes/456",
    );

    expect(screen.queryByText("No recipes available.")).not.toBeInTheDocument();
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
