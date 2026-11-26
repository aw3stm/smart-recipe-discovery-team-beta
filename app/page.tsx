import RecipeCard from "@/components/RecipeCard";
import type { Recipe } from "@/types/Recipe";

// Temporary mock recipe for QA preview. Remove before merging.
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

export default function Home() {
  return (
    <main>
      <h1>FlavorCraft</h1>
      <p>Smart Recipe Discovery</p>
      <RecipeCard recipe={mockRecipe} />
    </main>
  );
}
