"use client";

import React, { useState } from "react";
import { ICommentsInputForm } from "../shared/ICommentsInputForm";
import { Pencil, Trash2 } from "lucide-react";

const CommentList = () => {
  const [comments, setCommnets] = useState<ICommentsInputForm[]>([]);

  return (
    <>
      <section>
        {comments.length === 0 && (
          <h3 className="text-normal font-semibold text-center mt-6">
            No comments registered, be the first to comment above.
          </h3>
        )}
        {comments.map((comment, idx) => (
          <div className="rounded-md border-2 p-4 mt-2" key={idx}>
            <h1 className="font-bold italic">{comment.name}</h1>
            <p className="text-md italic mt-2 text-justify">
              {comment.comment}
            </p>
            <div className="flex flex-row justify-end items-center space-x-2">
              <Trash2
                className="cursor-pointer hover:scale-105 transition-all delay-100"
                size={16}
              />
              <Pencil
                className="cursor-pointer hover:scale-105 transition-all delay-100"
                size={16}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CommentList;
