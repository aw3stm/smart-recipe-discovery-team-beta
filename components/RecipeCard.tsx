import type { Recipe } from "@/types/Recipe";
import Image from "next/image";
import HeartIcon from "@/components/icons/HeartIcon";
import Link from "next/link";

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="relative">
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="relative aspect-7/5 w-full overflow-hidden">
          <span className="absolute top-3 left-0 z-1 rounded-r-full bg-[#D9D9D9] px-5 py-2 text-sm font-medium">
            {recipe.category}
          </span>
          <HeartIcon className="absolute top-3 right-3 z-1" />
          <Image
            src={recipe.image?.url || "/images/fallback-image.webp"}
            alt={recipe.image?.alt || recipe.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="m-3 space-y-4">
          <h2>
            <Link
              href={`/recipes/${recipe.id}`}
              className="after:absolute after:inset-0 focus-visible:after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-black"
            >
              {recipe.title}
            </Link>
          </h2>
          <p className="truncate">{recipe.description}</p>
        </div>

        <div className="mx-3 mt-7 mb-5 flex gap-3">
          <span className="flex-1 rounded-full bg-[#D9D9D9] px-3 py-2 text-center text-sm font-medium">
            {recipe.prepTime + recipe.cookTime} min
          </span>
          <span className="flex-1 rounded-full bg-[#D9D9D9] px-3 py-2 text-center text-sm font-medium">
            {recipe.servings} servings
          </span>
          <span className="flex-1 rounded-full bg-[#D9D9D9] px-3 py-2 text-center text-sm font-medium">
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
