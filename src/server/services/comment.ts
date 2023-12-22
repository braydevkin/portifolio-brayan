import { Comment } from "@prisma/client";
import { prismaClient } from "../PrismaClientConfig";

export const createComment = async (data: Comment): Promise<Comment> => {
  return await prismaClient.comment.create({ data });
};
