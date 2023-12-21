"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { ICommentsInputForm } from "../shared/ICommentsInputForm";

const CommentForm = () => {
  const TEXTAREA_LIMIT = 200;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICommentsInputForm>();

  const onSubmit: SubmitHandler<ICommentsInputForm> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="grid w-full gap-2">
        <Input
          type="Name"
          placeholder="Type your name"
          {...register("name", {
            maxLength: {
              value: 20,
              message: "This input exceed maxLength. The limit is 20 chars",
            },
          })}
        />
        <Textarea
          {...register("comment", {
            maxLength: {
              value: TEXTAREA_LIMIT,
              message: "This input exceed maxLength. The limit is 200 chars",
            },
            required: true,
          })}
          placeholder="Type your message here."
          className="resize-none outline-none h-40"
        />
        <p className="w-full text-end text-sm font-medium">
          {watch("comment") ? watch("comment").length : 0} / {TEXTAREA_LIMIT}
        </p>

        {errors.comment && (
          <p className="text-sm font-medium text-red-500">
            {errors.comment.message}
          </p>
        )}

        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
};

export default CommentForm;
