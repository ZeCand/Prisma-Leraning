import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First
async function mainFindWithSelectedRelatedSubnetFields() {
  const user = await prisma.user.findUnique({
    where: {
      email: "NinaMartin@gmail.com",
    },
    select: {
      email: true,
      posts: {
        select: {
          likes: true,
        },
      },
    },
  });
  console.log(user);
}

mainFindWithSelectedRelatedSubnetFields();
