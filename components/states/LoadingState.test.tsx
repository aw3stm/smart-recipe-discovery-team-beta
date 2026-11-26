// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LoadingState from "./LoadingState";

describe("LoadingState", () => {
  it("displays the default message", () => {
    render(<LoadingState />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays a custom message", () => {
    render(<LoadingState message="Fetching recipes..." />);
    expect(screen.getByText("Fetching recipes...")).toBeInTheDocument();
  });
});
