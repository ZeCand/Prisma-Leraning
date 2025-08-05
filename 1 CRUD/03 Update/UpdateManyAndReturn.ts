import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First
async function mainUpdateManyAndReturn() {
  const user = await prisma.user.updateManyAndReturn({
    where: {
      email: {
        contains: "@msn.com",
      },
    },
    data: {
      role: "ADMIN",
    },
  });
  console.log(user);
}

mainUpdateManyAndReturn();
