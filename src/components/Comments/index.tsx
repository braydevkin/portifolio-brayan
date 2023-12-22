import React from "react";

import CommentForm from "./Form";
import CommentList, { CommentListProps } from "./List";

export type CommentsProps = CommentListProps;

const Comments = ({ comments }: CommentsProps) => {
  return (
    <section id="comments" className="w-full h-auto px-4 lg:px-24 py-6 mt-12">
      <h1 className="font-bold italic">Comments</h1>
      <p className="text-sm italic">Leave your comments and help me improve</p>

      <CommentForm />
      <CommentList comments={comments} />
    </section>
  );
};

export default Comments;
