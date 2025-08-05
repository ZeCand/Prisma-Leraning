import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First

async function mainUpdateManyFields() {
  const updatePosts = await prisma.post.updateMany({
    data: {
      views: {
        increment: 1,
      },
      likes: {
        increment: 1,
      },
    },
  });
  console.log(updatePosts);
}

mainUpdateManyFields();
