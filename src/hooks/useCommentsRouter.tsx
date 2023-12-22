"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type UpdateCommentsFilters = {
  skip?: number;
  take?: number;
};

export const useCommentsRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateCommentsFilters = useCallback(
    ({ skip, take }: UpdateCommentsFilters) => {
      const params = new URLSearchParams(
        searchParams || ({} as Record<string, string>)
      );

      const originalUrl = `?${params.toString()}#comments`;

      if (skip !== undefined) {
        params.set("skip", String(skip));
      }

      if (take) {
        params.set("take", String(take));
      }

      const updatedURL = `?${params.toString()}#comments`;

      //This logic was created to avoid unexpected behavior from Next, which doesn't take any action because the new URL is the same as the previous one.
      if (originalUrl === updatedURL) {
        router.refresh();
        return;
      }

      router.push(updatedURL, {
        scroll: false,
      });
    },
    [router, searchParams]
  );

  return { updateCommentsFilters };
};
