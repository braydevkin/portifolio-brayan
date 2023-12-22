import type { NextApiRequest, NextApiResponse } from "next";
import { createComment } from "@/server/services/comment";
import { Comment } from "@prisma/client";

type ResponseData = {
  comment: Comment;
};

type MessageData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | MessageData>
) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const comment = await createComment(data);

      res.status(200).json({ comment });
    } catch (err) {
      console.error('==> Error in create comment', err)
      res.status(500).json({ message: 'Could not create comment' });
    }
  } else {
    res.status(200).json({ message: "Hello from Next.js!" });
  }
}
