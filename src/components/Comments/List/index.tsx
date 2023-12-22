"use client";

import React, { useCallback, useMemo } from "react";

import { Button } from "@/components/ui/button";
import { useCommentsContext } from "@/context/CommentsContext";

import { useCommentsRouter } from "@/hooks/useCommentsRouter";

const CommentList = () => {
  const { comments, pagination } = useCommentsContext();

  const { updateCommentsFilters } = useCommentsRouter();

  const canGoToNext = useMemo(() => {
    const newSkip = pagination.skip + pagination.take;
    return newSkip < pagination.total;
  }, [pagination.skip, pagination.take, pagination.total]);

  const canGoToPrevious = useMemo(() => {
    const newSkip = pagination.skip - pagination.take;
    return newSkip >= 0;
  }, [pagination.skip, pagination.take]);

  const next = useCallback(() => {
    updateCommentsFilters({ skip: pagination.skip + pagination.take });
  }, [pagination.skip, pagination.take, updateCommentsFilters]);

  const previous = useCallback(() => {
    updateCommentsFilters({ skip: pagination.skip - pagination.take });
  }, [pagination.skip, pagination.take, updateCommentsFilters]);

  return (
    <>
      <section>
        {comments.length === 0 && (
          <h3 className="text-normal font-semibold text-center mt-6">
            No comments registered, be the first to comment above.
          </h3>
        )}
        {comments.map((comment) => (
          <div
            className="rounded-md border-2 p-4 mt-2"
            key={`Comment_${comment.id}`}
          >
            <h1 className="font-bold italic">{comment.name ?? 'Anonymous'}</h1>
            <p className="text-md italic mt-2 text-justify">
              {comment.comment}
            </p>
          </div>
        ))}
        <div className="w-full flex flex-row items-center justify-between mt-3">
          <span className="text-sm px-4 font-medium">
            Showing {comments.length} of {pagination.total}
          </span>
          <div className="space-x-2">
            <Button disabled={!canGoToPrevious} onClick={() => previous()}>
              Previous
            </Button>
            <Button disabled={!canGoToNext} onClick={() => next()}>
              Next
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommentList;
