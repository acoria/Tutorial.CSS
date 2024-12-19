import { useState } from "react";
import { LoadingSpinnerButton } from "./LoadingSpinnerButton";

export const LoadingSpinnerButtonExample: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = () => {
    setIsLoading((previous) => !previous);
  };
  return (
    <LoadingSpinnerButton
      onClick={toggleIsLoading}
      isLoading={isLoading}
      caption="Click me"
      loadingCaption="Loading"
    />
  );
};
