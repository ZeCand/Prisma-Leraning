import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First
async function mainFindUniqueWithSubsetFields() {
  const user = await prisma.user.findMany({
    where: {
      email: "PerryWithKate@hotmail.com",
    },
    select: {
      email: true,
      name: false,
    },
  });
  console.log(user);
}

mainFindUniqueWithSubsetFields();
