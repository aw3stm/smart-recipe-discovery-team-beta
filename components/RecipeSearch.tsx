"use client";

import { useEffect, useId, useRef, useState } from "react";

const SEARCH_DEBOUNCE_MS = 300;

type RecipeSearchProps = {
  onSearch: (query: string) => void;
};

export default function RecipeSearch({ onSearch }: RecipeSearchProps) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onSearchRef = useRef(onSearch);

  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

  function cancelPendingSearch() {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function handleChange(value: string) {
    setQuery(value);
    cancelPendingSearch();

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      onSearchRef.current(value.trim().toLowerCase());
    }, SEARCH_DEBOUNCE_MS);
  }

  function handleClear() {
    cancelPendingSearch();
    setQuery("");
    onSearch("");
    inputRef.current?.focus();
  }

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div role="search" aria-label="Recipe search">
      <label htmlFor={inputId}>Search recipes</label>

      <input
        ref={inputRef}
        id={inputId}
        type="search"
        value={query}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search recipes..."
      />

      <button type="button" onClick={handleClear}>
        Clear search
      </button>
    </div>
  );
}
