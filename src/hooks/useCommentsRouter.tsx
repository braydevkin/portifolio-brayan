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

      if (skip !== undefined) {
        params.set("skip", String(skip));
      }

      if (take) {
        params.set("take", String(take));
      }

      router.push(`?${params.toString()}#comments`, {
        scroll: false,
      });
    },
    [router, searchParams]
  );

  return { updateCommentsFilters };
};
