import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ReactNode } from 'react';

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

export const ErrorBoundary = ({ fallback, children }: Props) => {
  return (
    <ReactErrorBoundary fallbackRender={() => fallback}>
      {children}
    </ReactErrorBoundary>
  );
};
