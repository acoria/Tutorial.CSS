import { useMemo } from "react";

/**
 * This is a hook to use global Variables --globalColor from css files in TypeScript.
 * @param colorVariableName 
 */
export const useCSSColor = (colorVariableName: string) => {
  const primaryColor = useMemo(
    () =>
      getComputedStyle(document.documentElement).getPropertyValue(
        colorVariableName
      ),
    []
  );
  return primaryColor;
};
