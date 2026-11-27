// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "@/types/Recipe";

const mockRecipe: Recipe = {
  id: "1",
  title: "Spaghetti Pomodoro",
  description:
    "Classic Italian spaghetti with a rich tomato sauce and fresh basil.",
  prepTime: 10,
  cookTime: 20,
  servings: 2,
  difficulty: "Easy",
  category: "Dinner",
  ingredients: [],
  instructions: [],
  tags: ["Italian", "Vegetarian", "Pasta"],
  image: {
    url: "/images/recipe-placeholder.jpg",
    alt: "Spaghetti with tomato sauce topped with fresh basil leaves",
  },
  owner: {
    name: "FlavorCraft",
    email: "test@example.com",
    bio: null,
    avatar: {
      url: "/images/fallback.png",
      alt: "Placeholder avatar",
    },
    banner: {
      url: "/images/fallback.png",
      alt: "Placeholder banner",
    },
  },
  comments: [],
  _count: {
    favorites: 0,
  },
  created: "2026-11-26",
  updated: "2026-11-26",
};

describe("RecipeCard", () => {
  it("displays the recipe title", () => {
    render(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByText(mockRecipe.title)).toBeInTheDocument();
  });

  it("displays the recipe description", () => {
    render(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByText(mockRecipe.description)).toBeInTheDocument();
  });

  it("displays the recipe category", () => {
    render(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByText(mockRecipe.category)).toBeInTheDocument();
  });

  it("displays the total recipe time", () => {
    render(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByText("30 min")).toBeInTheDocument();
  });

  it("displays the number of servings", () => {
    render(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByText("2 servings")).toBeInTheDocument();
  });

  it("displays the recipe difficulty", () => {
    render(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByText(mockRecipe.difficulty)).toBeInTheDocument();
  });

  it("displays the recipe image with meaningful alt text", () => {
    render(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByAltText(mockRecipe.image.alt)).toBeInTheDocument();
  });

  it("links to the correct recipe details page", () => {
    render(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/recipes/1");
  });

  const recipeWithoutImage = {
    ...mockRecipe,
    image: {
      ...mockRecipe.image,
      url: "",
    },
  };

  it("displays a fallback image when the recipe image URL is missing", () => {
    render(<RecipeCard recipe={recipeWithoutImage} />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      expect.stringContaining(
        encodeURIComponent("/images/fallback-image.webp"),
      ),
    );
  });
});
