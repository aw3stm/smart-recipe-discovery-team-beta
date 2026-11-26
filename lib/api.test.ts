import { describe, it, expect, vi, afterEach } from "vitest";
import { getAllRecipes, getSingularRecipe } from "./api";

const BASE_API = "https://v2.api.noroff.dev/recipe-book/recipes";

const mockRecipe = {
  id: "123",
  title: "Margherita Pizza",
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
});
