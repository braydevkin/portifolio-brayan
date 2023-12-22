import { Comment } from "@prisma/client";
import { prismaClient } from "../PrismaClientConfig";
import { ListComments, createComment, listComments } from "./comment";

describe("#Comment Service", () => {
  describe("#createComment", () => {
    it("Should call prisma client create function", async () => {
      const commentMock: Comment = {
        name: "any_name",
        comment: "any_comment",
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaClient.comment, "create" as any).mockReturnValue({});

      await createComment(commentMock);
      expect(prismaClient.comment.create).toHaveBeenCalled();
    });

    it("Should call prisma client create function with comment mock args", async () => {
      const commentMock: Comment = {
        name: "any_name",
        comment: "any_comment",
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaClient.comment, "create" as any).mockReturnValue({});

      await createComment(commentMock);
      expect(prismaClient.comment.create).toHaveBeenCalledWith({
        data: commentMock,
      });
    });

    it("Should return comment result", async () => {
      const commentMock: Comment = {
        name: "any_name",
        comment: "any_comment",
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(prismaClient.comment, "create" as any)
        .mockReturnValue(commentMock);

      const comment = await createComment(commentMock);
      expect(comment).toBe(commentMock);
    });
  });

  describe("#listComments", () => {
    it("Should call prisma client findMany function", async () => {
      const commentListMock: ListComments = {
        skip: 0,
        take: 3,
      };

      jest.spyOn(prismaClient.comment, "count" as any).mockReturnValue(0);
      jest.spyOn(prismaClient.comment, "findMany" as any).mockReturnValue({});

      await listComments(commentListMock);
      expect(prismaClient.comment.findMany).toHaveBeenCalled();
    });

    it("Should call prisma client findMany function with list comment mock args", async () => {
      const commentListMock: ListComments = {
        skip: 0,
        take: 3,
      };

      jest.spyOn(prismaClient.comment, "count" as any).mockReturnValue(0);
      jest.spyOn(prismaClient.comment, "findMany" as any).mockReturnValue({});

      const expected = {
        ...commentListMock,
        orderBy: {
          createdAt: "desc",
        },
      };

      await listComments(commentListMock);
      expect(prismaClient.comment.findMany).toHaveBeenCalledWith(expected);
    });

    it("Should return a list of comment result", async () => {
      const commentListMock: ListComments = {
        skip: 0,
        take: 3,
      };

      const expected: Comment[] = [
        {
          name: "any_name",
          comment: "any_comment",
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "any_name",
          comment: "any_comment",
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest
        .spyOn(prismaClient.comment, "count" as any)
        .mockReturnValue(expected.length);
      jest
        .spyOn(prismaClient.comment, "findMany" as any)
        .mockReturnValue(expected);

      const { comments, total } = await listComments(commentListMock);
      expect(comments).toBe(expected);
      expect(total).toBe(expected.length);
    });
  });
});
