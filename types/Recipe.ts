export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  category: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  tags: string[];
  image: Image;
  owner: RecipeOwner;
  comments: RecipeComment[];
  _count: {
    favorites: number;
  };
  created: string;
  updated: string;
}

export interface RecipesResponse {
  data: Recipe[];
  meta: PaginationMeta;
}

export interface RecipeResponse {
  data: Recipe;
  meta: Record<string, never>;
}

interface RecipeIngredient {
  name: string;
  quantity: number;
  unit: string;
}

interface RecipeOwner {
  name: string;
  email: string;
  bio: string | null;
  avatar: Image;
  banner: Image;
}

interface RecipeComment {
  id: string;
  text: string;
  author: {
    name: string;
    email: string;
  };
  created: string;
  updated: string;
}

interface Image {
  url: string;
  alt: string;
}

interface PaginationMeta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
}
