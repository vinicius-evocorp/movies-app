import { FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  // eslint-disable-next-line no-console
  console.warn(error);

  return <div>{error.message}</div>;
}

export default ErrorFallback;
