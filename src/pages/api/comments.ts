import type { NextApiRequest, NextApiResponse } from "next";
import { createComment } from "@/server/services/comment";
import { Comment } from "@prisma/client";

import { z } from "zod";

const createCommentBodySchema = z.object({
  name: z.string().max(20).nullable().optional(),
  comment: z.string().max(200),
});

type CommentsResponse =
  | {
      comment: Comment;
    }
  | {
      message: string;
    }
  | {
      validationError: z.ZodError<z.TypeOf<typeof createCommentBodySchema>>;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommentsResponse>
) {
  if (req.method === "POST") {
    try {
      const createCommentDTO = createCommentBodySchema.safeParse(req.body);

      if (createCommentDTO.success) {
        const comment = await createComment(createCommentDTO.data);

        return res.status(200).json({ comment });
      }

      return res.status(400).json({ validationError: createCommentDTO.error });
    } catch (err) {
      console.error("==> Error during comment creation", err);
      return res.status(500).json({ message: "Could not create comment" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
