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
// Exemple 1: Create User Using UserCreateInput
// ------------------------------------

async function mainUserCreateInput() {
  let includePosts: boolean = true;
  let user: Prisma.UserCreateInput;

  if (includePosts) {
    user = {
      name: "Alicia Keys",
      email: "KeysAlicia@gmail.com",
      city: "Lisbon",
      country: "Portugal",
      pets: "Dog",
      coinflips: false,
      posts: {
        create: {
          title: "Something i need to tell!",
          comments: "I need to tell you Something",
        },
      },
    };
  } else {
    user = {
      name: "Kate Perry",
      email: "PerryWithKate@hotmail.com",
      country: "Hawaii",
      city: "Honolulu",
      pets: "Lion",
      coinflips: true,
    };
  }

  const createUser = await prisma.user.create({ data: user });
  console.log(createUser);
}

mainUserCreateInput();
