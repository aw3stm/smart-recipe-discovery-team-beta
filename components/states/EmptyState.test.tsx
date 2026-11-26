// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";

describe("EmptyState", () => {
  it("displays the default message", () => {
    render(<EmptyState />);
    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });

  it("displays custom message", () => {
    render(<EmptyState message="No recipes match your search." />);
    expect(
      screen.getByText("No recipes match your search."),
    ).toBeInTheDocument();
  });
});
