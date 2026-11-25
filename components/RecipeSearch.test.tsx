// @vitest-environment jsdom

import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import RecipeSearch from "./RecipeSearch";

describe("RecipeSearch", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("normalises uppercase queries and surrounding whitespace", () => {
    const onSearch = vi.fn();

    render(<RecipeSearch onSearch={onSearch} />);

    fireEvent.change(
      screen.getByRole("searchbox", { name: "Search recipes" }),
      {
        target: { value: "  PASTA  " },
      },
    );

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("pasta");
  });

  it("resets the debounce timer when typing continues", () => {
    const onSearch = vi.fn();

    render(<RecipeSearch onSearch={onSearch} />);

    const input = screen.getByRole("searchbox", {
      name: "Search recipes",
    });

    fireEvent.change(input, {
      target: { value: "pas" },
    });

    act(() => {
      vi.advanceTimersByTime(200);
    });

    fireEvent.change(input, {
      target: { value: "pasta" },
    });

    act(() => {
      vi.advanceTimersByTime(299);
    });

    expect(onSearch).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("pasta");
  });

  it("renders an accessible search input", () => {
    render(<RecipeSearch onSearch={vi.fn()} />);

    expect(
      screen.getByRole("searchbox", { name: "Search recipes" }),
    ).toBeInTheDocument();
  });

  it("debounces the search query by 300 ms", () => {
    const onSearch = vi.fn();

    render(<RecipeSearch onSearch={onSearch} />);

    const input = screen.getByRole("searchbox", {
      name: "Search recipes",
    });

    fireEvent.change(input, {
      target: { value: "pasta" },
    });

    expect(input).toHaveValue("pasta");
    expect(onSearch).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(299);
    });

    expect(onSearch).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("pasta");
  });

  it("clears the search immediately and restores input focus", () => {
    const onSearch = vi.fn();

    render(<RecipeSearch onSearch={onSearch} />);

    const input = screen.getByRole("searchbox", {
      name: "Search recipes",
    });

    fireEvent.change(input, {
      target: { value: "pasta" },
    });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    const clearButton = screen.getByRole("button", {
      name: "Clear search",
    });

    clearButton.focus();
    fireEvent.click(clearButton);

    expect(input).toHaveValue("");
    expect(input).toHaveFocus();
    expect(onSearch).toHaveBeenCalledTimes(2);
    expect(onSearch).toHaveBeenLastCalledWith("");
  });

  it("cancels a pending search when the input is cleared", () => {
    const onSearch = vi.fn();

    render(<RecipeSearch onSearch={onSearch} />);

    fireEvent.change(
      screen.getByRole("searchbox", { name: "Search recipes" }),
      {
        target: { value: "pasta" },
      },
    );

    fireEvent.click(screen.getByRole("button", { name: "Clear search" }));

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("");
  });

  it("cancels a pending search when unmounted", () => {
    const onSearch = vi.fn();

    const { unmount } = render(<RecipeSearch onSearch={onSearch} />);

    fireEvent.change(
      screen.getByRole("searchbox", { name: "Search recipes" }),
      {
        target: { value: "pasta" },
      },
    );

    unmount();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(onSearch).not.toHaveBeenCalled();
  });

  it("uses the latest search callback when the parent rerenders", () => {
    const initialOnSearch = vi.fn();
    const updatedOnSearch = vi.fn();

    const { rerender } = render(<RecipeSearch onSearch={initialOnSearch} />);

    fireEvent.change(
      screen.getByRole("searchbox", { name: "Search recipes" }),
      {
        target: { value: "pasta" },
      },
    );

    act(() => {
      vi.advanceTimersByTime(150);
    });

    rerender(<RecipeSearch onSearch={updatedOnSearch} />);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(initialOnSearch).not.toHaveBeenCalled();
    expect(updatedOnSearch).toHaveBeenCalledTimes(1);
    expect(updatedOnSearch).toHaveBeenCalledWith("pasta");
  });
});
