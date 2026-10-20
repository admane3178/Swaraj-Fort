import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import React from 'react';

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role="alert" className="p-4 bg-destructive text-destructive-foreground rounded">
      <p className="font-bold">Something went wrong:</p>
      <pre className="mt-2 text-sm whitespace-pre-wrap break-words">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        Try again
      </button>
    </div>
  );
}

export const ErrorBoundary: React.FC<React.PropsWithChildren<{ fallback?: React.ReactNode }>> = ({ children, fallback }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset any state if needed
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};
