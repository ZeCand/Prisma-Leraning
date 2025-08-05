import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First
async function mainUpdate() {
  const user = await prisma.user.update({
    where: {
      email: "Alicia Keys",
    },
    data: {
      name: "Alicia Keys",
    },
  });
  console.log(user);
}

mainUpdate();
