import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

async function mainDeleteCascade() {
  const deletePosts = prisma.post.deleteMany({
    where: {
      authorId: 7,
    },
  });

  const deleteUser = prisma.user.delete({
    where: {
      id: 7,
    },
  });

  const transaction = await prisma.$transaction([deletePosts, deleteUser]);
  console.log(transaction);
}

mainDeleteCascade();
