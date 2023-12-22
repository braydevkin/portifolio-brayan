import { PrismaClient } from "@prisma/client";

const prismaGlobal = global as typeof global & {
  prismaGlobal?: PrismaClient;
};
const getPrismaClient = () =>
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? [
            {
              emit: "stdout",
              level: "error",
            },
            {
              emit: "stdout",
              level: "info",
            },
            {
              emit: "stdout",
              level: "warn",
            },
          ]
        : [],
  });



export const prismaClient: PrismaClient =
  prismaGlobal.prismaGlobal || getPrismaClient();

  
