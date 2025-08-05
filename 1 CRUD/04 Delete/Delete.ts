import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

async function mainDelete() {
  const deleteUser = await prisma.user.delete({
    where: {
      id: 2,
    },
  });
  console.log(deleteUser);
}

mainDelete();
