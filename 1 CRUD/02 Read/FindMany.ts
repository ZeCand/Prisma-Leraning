import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// ------------------------------------
// Exemple 1: Find All record in Table User
// ------------------------------------
async function FindMany() {
  const findUser = await prisma.user.findMany({});
  console.log(findUser);
}
//FindMany();

// ------------------------------------
// Exemple 2: Find the number of user pass in "take"
// ------------------------------------

async function FindManyTake() {
  const findUser = await prisma.user.findMany({ take: 2 });
  console.log(findUser);
}
//FindManyTake();

// ------------------------------------
// Exemple 3: Find users and only show user's id
// ------------------------------------

async function FindManySelect() {
  const findUser = await prisma.user.findMany({ select: { id: true } });
  console.log(findUser);
}
FindManySelect();
