interface LoadingStateProps {
  message?: string;
}

/**
 * Displays an accessible loading indicator while content is being fetched.
 * Supports custom messages and respects reduced-motion preferences.
 */
export default function LoadingState({
  message = "Loading...",
}: LoadingStateProps) {
  return (
    <div role="status" aria-live="polite">
      <div
        className="h-6 w-6 rounded-full border-2 border-current border-t-transparent motion-safe:animate-spin"
        aria-hidden="true"
      ></div>
      <p>{message}</p>
    </div>
  );
}
