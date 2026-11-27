import { describe, it, expect, vi, afterEach } from "vitest";
import { getAllRecipes, getSingularRecipe } from "./api";

const BASE_API = "https://v2.api.noroff.dev/recipe-book/recipes";

const BROKEN_IMGUR_URL = "https://imgur.com/a/R9eX4nV";
const FIXED_IMGUR_URL = "https://i.imgur.com/Z3B9xzn.png";

const mockRecipe = {
  id: "123",
  title: "Margherita Pizza",
  image: {
    url: "https://images.unsplash.com/photo-123",
    alt: "Margherita Pizza",
  },
};

const recipeWithBrokenImage = {
  ...mockRecipe,
  image: {
    url: BROKEN_IMGUR_URL,
    alt: "Tomato",
  },
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Recipe API service", () => {
  it("returns an array of recipes", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: [mockRecipe] }),
    });

    vi.stubGlobal("fetch", mockFetch);

    const result = await getAllRecipes();

    expect(mockFetch).toHaveBeenCalledWith(BASE_API);
    expect(result).toEqual([mockRecipe]);
  });

  it("returns a single recipe by ID", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: mockRecipe }),
    });

    vi.stubGlobal("fetch", mockFetch);

    const result = await getSingularRecipe("123");

    expect(mockFetch).toHaveBeenCalledWith(`${BASE_API}/123`);
    expect(result).toEqual(mockRecipe);
  });

  it("throws an error when fetching recipes fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      }),
    );

    await expect(getAllRecipes()).rejects.toThrow(
      "Failed to fetch recipes: 500",
    );
  });

  it("throws an error when a recipe is not found", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
      }),
    );

    await expect(getSingularRecipe("invalid-id")).rejects.toThrow(
      "Failed to fetch recipe invalid-id: 404",
    );
  });

  it("corrects the broken Imgur URL in the recipe feed", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ data: [recipeWithBrokenImage] }),
      }),
    );

    const result = await getAllRecipes();

    expect(result[0]).toEqual({
      ...recipeWithBrokenImage,
      image: {
        ...recipeWithBrokenImage.image,
        url: FIXED_IMGUR_URL,
      },
    });

    expect(recipeWithBrokenImage.image.url).toBe(BROKEN_IMGUR_URL);
  });

  it("corrects the broken Imgur URL in a single recipe", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ data: recipeWithBrokenImage }),
      }),
    );

    const result = await getSingularRecipe("123");

    expect(result.image.url).toBe(FIXED_IMGUR_URL);
    expect(result.image.alt).toBe("Tomato");
  });

  it("preserves valid recipes alongside corrected recipes", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          data: [mockRecipe, recipeWithBrokenImage],
        }),
      }),
    );

    const result = await getAllRecipes();

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(mockRecipe);
    expect(result[1].image.url).toBe(FIXED_IMGUR_URL);
  });
});
