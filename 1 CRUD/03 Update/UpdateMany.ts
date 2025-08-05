import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First
async function mainUpdateMany() {
  const user = await prisma.user.updateMany({
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

mainUpdateMany();
