import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  // eslint-disable-next-line no-var
  var prisma:
    | undefined
    | ReturnType<typeof prismaClientSingleton>;
}

export const prisma =
  global.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
