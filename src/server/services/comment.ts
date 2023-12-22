import { Comment } from "@prisma/client";
import { prismaClient } from "../PrismaClientConfig";

export type ListComments = {
  skip: number;
  take: number;
};

export type ListCommentsResponse = {
  total: number;
  comments: Comment[];
};

export const createComment = async (data: Comment): Promise<Comment> => {
  return await prismaClient.comment.create({ data });
};

export const listComments = async ({
  skip,
  take,
}: ListComments): Promise<ListCommentsResponse> => {
  const comments = await prismaClient.comment.findMany({
    skip,
    take,
    orderBy: { createdAt: "desc" },
  });
  const total = await prismaClient.comment.count();

  return {
    total,
    comments,
  };
};
