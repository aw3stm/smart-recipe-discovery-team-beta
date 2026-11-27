// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import RecipeGrid from "./RecipeGrid";

describe("RecipeGrid", () => {
  it("renders its children as a recipe list", () => {
    render(
      <RecipeGrid>
        <li>Tomato soup</li>
        <li>Chicken curry</li>
      </RecipeGrid>,
    );

    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Tomato soup");
    expect(items[1]).toHaveTextContent("Chicken curry");
  });
});
