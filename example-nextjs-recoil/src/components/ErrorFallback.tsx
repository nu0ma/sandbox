import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <>
      <p>Something went wrong!</p>
    </>
  );
};
