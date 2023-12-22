"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { useCommentsRouter } from "@/hooks/useCommentsRouter";

export type CommentsInputForm = {
  name: string;
  comment: string;
};

const CommentForm = () => {
  const TEXTAREA_LIMIT = 200;

  const { toast } = useToast();
  const router = useRouter();
  const { updateCommentsFilters } = useCommentsRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CommentsInputForm>();

  const onSubmit: SubmitHandler<CommentsInputForm> = async (data) => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      reset();
      if (response.status === 200) {
        await response.json();
        toast({
          title: "Thank for comment",
          description: "Feel free to add more comments.",
          variant: "default",
          duration: 2000,
        });
        updateCommentsFilters({ skip: 0 });
        return;
      }
      toast({
        title: "An error occurs",
        description: "You can try again or talk to our support",
        variant: "destructive",
        duration: 2000,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "An error occurs",
        description: "You can try again or talk to our support",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

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
