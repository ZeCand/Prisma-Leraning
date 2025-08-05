import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First
async function mainFindFirst() {
  const user = await prisma.user.findFirst({
    where: {
      country: "UK",
    },
    orderBy: {
      id: "desc",
    },
  });
  console.log(user);
}

mainFindFirst();
