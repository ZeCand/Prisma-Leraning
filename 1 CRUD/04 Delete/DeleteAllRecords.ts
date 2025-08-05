import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

async function mainDeleteAllRecords() {
  const deletePosts = prisma.post.deleteMany();
  const deleteProfile = prisma.extendedProfile.deleteMany();
  const deleteUsers = prisma.user.deleteMany();

  // The transaction runs synchronously so deleteUsers must run last.
  const transaction = await prisma.$transaction([
    deleteProfile,
    deletePosts,
    deleteUsers,
  ]);

  console.log(transaction);
}

mainDeleteAllRecords();
