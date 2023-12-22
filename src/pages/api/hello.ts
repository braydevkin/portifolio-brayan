import type { NextApiRequest, NextApiResponse } from "next";
import { createComment } from "@/server/services/comment";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const data = req.body;
    const created = await createComment(data);
  } else {
    res.status(200).json({ message: "Hello from Next.js!" });
  }
}
