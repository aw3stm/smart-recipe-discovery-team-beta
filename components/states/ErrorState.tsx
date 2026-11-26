"use client";

interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

/**
 * Displays a friendly error message with a retry option.
 * The parent component supplies the retry logic through onRetry.
 */
export default function ErrorState({
  message = "Something went wrong. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div role="status" aria-live="polite">
      <p>{message}</p>
      <button type="button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}
