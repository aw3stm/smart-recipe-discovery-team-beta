// @vitest-environment jsdom

import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ErrorState from "./ErrorState";

describe("ErrorState", () => {
  it("displays the default message", () => {
    render(<ErrorState onRetry={vi.fn()} />);
    expect(
      screen.getByText("Something went wrong. Please try again."),
    ).toBeInTheDocument();
  });

  it("displays a custom message", () => {
    render(
      <ErrorState
        onRetry={vi.fn()}
        message="Unable to load recipes. Please try again."
      />,
    );
    expect(
      screen.getByText("Unable to load recipes. Please try again."),
    ).toBeInTheDocument();
  });

  it("calls onRetry when the retry button is clicked", () => {
    const onRetry = vi.fn();
    render(<ErrorState onRetry={onRetry} />);
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
