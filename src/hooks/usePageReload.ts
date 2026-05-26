import { useCallback } from "react";

export function usePageReload(): () => void {
  return useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.location.reload();
  }, []);
}
