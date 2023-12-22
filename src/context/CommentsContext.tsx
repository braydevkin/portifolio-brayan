"use client";

import { Comment } from "@prisma/client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type CommentsPagination = {
  skip: number;
  take: number;
  total: number;
};

export type CommentsContextContextData = {
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  pagination: CommentsPagination;
  setCommentsPagination: React.Dispatch<
    React.SetStateAction<CommentsPagination>
  >;
};

export type CommentsContextProps = {
  children: React.ReactNode;
  defaultComments?: Comment[];
  defaultCommentsPagination?: CommentsPagination;
};

const CommentsContextContext = createContext<CommentsContextContextData>(
  {} as CommentsContextContextData
);

const CommentsContext = ({
  children,
  defaultComments,
  defaultCommentsPagination,
}: CommentsContextProps) => {
  const [comments, setComments] = useState<Comment[]>(defaultComments || []);

  const [commentsPagination, setCommentsPagination] =
    useState<CommentsPagination>(
      defaultCommentsPagination || {
        skip: 0,
        take: 0,
        total: 0,
      }
    );

  useEffect(() => {
    if (defaultCommentsPagination) {
      setCommentsPagination(defaultCommentsPagination);
    }
  }, [defaultCommentsPagination]);

  useEffect(() => {
    if (defaultComments) {
      setComments(defaultComments);
    }
  }, [defaultComments]);

  return (
    <CommentsContextContext.Provider
      value={{
        comments,
        setComments,
        pagination: commentsPagination,
        setCommentsPagination,
      }}
    >
      {children}
    </CommentsContextContext.Provider>
  );
};

export default CommentsContext;

export function useCommentsContext() {
  const context = useContext(CommentsContextContext);

  if (!context) {
    throw new Error("useCommentsContext must be used within a CommentsContext");
  }

  return context;
}
