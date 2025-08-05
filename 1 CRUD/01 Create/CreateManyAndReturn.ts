import { PrismaClient, Prisma } from "../../generated/prisma";

const prisma = new PrismaClient();

// ------------------------------------
//            Se first User on table
// ------------------------------------

async function ViewUser() {
  const viewUser = await prisma.user.findFirst({});
  console.log("-------------------------");
  console.log("Your First User Down Here");
  console.log("");
  console.log(viewUser);
  console.log("-------------------------");
}
//ViewUser();
//
//-------------------------------------------------

// ------------------------------------
//            Se first Post on table
// ------------------------------------
async function ViewPost() {
  const viewPost = await prisma.post.findFirst({});
  if (viewPost == null) {
    console.log("-------------------------");
    console.error("You dont have a Post Yet!");
    console.log("-------------------------");
  } else {
    console.log(viewPost);
  }
}
//ViewPost();
//
//------------------------------------------------

// ------------------------------------
// Exemple 1: CreateManyAndReturn Users
// ------------------------------------

async function CreateManyUsersAndReturn() {
  const users = await prisma.user.createManyAndReturn({
    data: [
      {
        name: "Michael Jackson",
        email: "JacksonMichael@jacksons.com",
        country: "UK",
        city: "lasty",
        pets: "Dog",
        coinflips: false,
      },
      {
        name: "Talita Bateman",
        email: "BatemanYouThere@msn.com",
        country: "Spain",
        city: "Madrid",
        pets: "Chicken",
        coinflips: true,
      },
      {
        name: "Bon Jovi",
        email: "JoniTheBon@legendary.com",
        country: "UK",
        city: "lasty",
        pets: "Tiger",
        coinflips: true,
      },
    ],
  });
  console.log(users);
}

CreateManyUsersAndReturn();
