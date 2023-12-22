import { Comment } from "@prisma/client";
import { prismaClient } from "../PrismaClientConfig";

export const createComment = async (data: Comment): Promise<Comment | void> => {
  console.log({prismaClient})
  try {
    const created = await prismaClient.comment.create({ data });
    if (created) {
      return data;
    }
    throw new Error(
      "==> createComment: It was not possible create a new comment"
    );
  } catch (err) {
    console.debug("==> Error", err);
    return;
  }
};
