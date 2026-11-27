interface EmptyStateProps {
  message?: string;
}

/**
 * Displays feedback when no content or search results are available.
 * Supports a custom message depending on the context.
 */
export default function EmptyState({
  message = "No results found.",
}: EmptyStateProps) {
  return (
    <div role="status" aria-live="polite">
      <p>{message}</p>
    </div>
  );
}
