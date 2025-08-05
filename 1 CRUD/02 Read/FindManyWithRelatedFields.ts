import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First
async function mainFindManyWithRelatedFields() {
  const user = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
      posts: {
        some: {
          published: false,
        },
      },
    },
  });
  console.log(user);
}

mainFindManyWithRelatedFields();
