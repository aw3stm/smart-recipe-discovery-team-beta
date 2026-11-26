import { getAllRecipes } from "@/lib/api";

export default async function Home() {
  const recipes = await getAllRecipes();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1>FlavorCraft</h1>
      <p>Smart Recipe Discovery</p>

      <section aria-labelledby="recipes-heading" className="mt-8">
        <h2 id="recipes-heading">Explore recipes</h2>

        {recipes.length === 0 ? (
          <p>No recipes available.</p>
        ) : (
          <p>{recipes.length} recipes available.</p>
        )}
      </section>
    </main>
  );
}