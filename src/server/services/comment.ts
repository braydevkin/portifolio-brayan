import { Comment } from "@prisma/client";
import { prismaClient } from "../PrismaClientConfig";

export const createComment = async (data: Comment): Promise<Comment | void> => {
  try {
    console.log(data);
    const created = await prismaClient.comment.create({
      data: { name: "Teste", comment: "teste2" },
    });
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
