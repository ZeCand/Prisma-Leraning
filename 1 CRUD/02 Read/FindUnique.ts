import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// ------------------------------------
// Exempl2 1:  Find Unique by email
// ------------------------------------
async function FindUserBYEmail() {
  const findUser = await prisma.user.findUnique({
    where: {
      email: "NinaMartin@gmail.com",
    },
  });
  console.log(findUser);
}
FindUserBYEmail();

// ------------------------------------
// Exemple 2:  Find Unique by id
// ------------------------------------

async function FindUserBYId() {
  const findUser = await prisma.user.findUnique({
    where: {
      id: 8,
    },
  });
  console.log(findUser);
}
FindUserBYId();
