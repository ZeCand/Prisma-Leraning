import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

async function mainFindManyWithMultipleFilter() {
  const user = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: "M",
          },
        },
        {
          AND: {
            role: {
              equals: "USER",
            },
          },
        },
      ],
    },
  });
  console.log(user);
}

mainFindManyWithMultipleFilter();
