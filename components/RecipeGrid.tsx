import type { ReactNode } from "react";

interface RecipeGridProps {
  children: ReactNode;
}

export default function RecipeGrid({ children }: RecipeGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </ul>
  );
}
