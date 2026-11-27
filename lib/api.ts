import type { Recipe, RecipeResponse, RecipesResponse } from "@/types/Recipe";

const BASE_API = "https://v2.api.noroff.dev/recipe-book/recipes";

// Temporary workaround for an upstream API entry containing
// an Imgur album URL instead of a direct image URL.
const BROKEN_IMGUR_URL = "https://imgur.com/a/R9eX4nV";
const FIXED_IMGUR_URL = "https://i.imgur.com/Z3B9xzn.png";

function normalizeRecipe(recipe: Recipe): Recipe {
  if (recipe.image?.url === BROKEN_IMGUR_URL) {
    return {
      ...recipe,
      image: {
        ...recipe.image,
        url: FIXED_IMGUR_URL,
      },
    };
  }

  return recipe;
}

export async function getAllRecipes(): Promise<Recipe[]> {
  const response = await fetch(BASE_API);

  if (!response.ok) {
    throw new Error(`Failed to fetch recipes: ${response.status}`);
  }

  const result: RecipesResponse = await response.json();

  return result.data.map(normalizeRecipe);
}

export async function getSingularRecipe(id: string): Promise<Recipe> {
  const response = await fetch(`${BASE_API}/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch recipe ${id}: ${response.status}`);
  }

  const result: RecipeResponse = await response.json();

  return normalizeRecipe(result.data);
}
