import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First
async function mainFindManyWithFilter() {
  const user = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
    },
  });
  console.log(user);
}

mainFindManyWithFilter();
