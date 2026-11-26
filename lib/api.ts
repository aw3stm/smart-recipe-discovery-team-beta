import type { Recipe, RecipeResponse, RecipesResponse } from "@/types/Recipe";

const BASE_API = "https://v2.api.noroff.dev/recipe-book/recipes";

export async function getAllRecipes(): Promise<Recipe[]> {
  const response = await fetch(BASE_API);

  if (!response.ok) {
    throw new Error(`Failed to fetch recipes: ${response.status}`);
  }

  const result: RecipesResponse = await response.json();

  return result.data;
}

export async function getSingularRecipe(id: string): Promise<Recipe> {
  const response = await fetch(`${BASE_API}/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch recipe ${id}: ${response.status}`);
  }

  const result: RecipeResponse = await response.json();

  return result.data;
}
