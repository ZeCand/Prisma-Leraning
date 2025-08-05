import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// Find First

//--------------------------------------------------
// If email exist - Update Name
// If email No exist - Create new user
//--------------------------------------------------
async function mainUpsert() {
  const user = await prisma.user.upsert({
    where: {
      email: "JonhCena@gmail.com",
    },
    update: {
      name: "Jonh Cena",
    },
    create: {
      email: "TimBergling@gmail.com",
      name: "Tim Bergling",
      coinflips: false,
      city: "Stockholm",
      country: "Sweden",
      pets: "Dog",
    },
  });
  console.log(user);
}

mainUpsert();
