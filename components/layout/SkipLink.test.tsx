// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SkipLink from "./SkipLink";

describe("SkipLink", () => {
  it("links to the main content", () => {
    render(<SkipLink />);
    expect(
      screen.getByRole("link", { name: "Skip to main content" }),
    ).toHaveAttribute("href", "#main-content");
  });
});
