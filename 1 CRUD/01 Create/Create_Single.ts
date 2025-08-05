import { PrismaClient } from "../../generated/prisma";

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
ViewUser();
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
ViewPost();
//------------------------------------------------

// ------------------------------------
// Exemple 1: Create single User
// ------------------------------------

async function MainCreateUser() {
  const userCreate = await prisma.user.create({
    data: {
      //id: Auto increment
      name: "jonh", // String
      email: "jonh@gmail.com", //unique
      //profileViews: Int Deffault 0
      //Role Int Default "User"
      coinflips: true, // Bool
      city: "Lisbon", // String
      country: "portugal", // String
      pets: "Cat", // String -> Json
    },
  });

  console.log(userCreate);
}

//MainCreateUser();

// ------------------------------------
// Exempl3 2: Crate A Single Post
// ------------------------------------

async function MainCreatePost() {
  const createPost = await prisma.post.create({
    data: {
      //id: AutoIncremented
      title: "I'm Learning Prisma!!", //String
      published: false, // Bool
      authorId: 1, //Int Insert Id of User
      comments: "Good Luck!", //String -> Json
      //views: Int Default 0
      //likes Int Default 0
    },
  });
  console.log(createPost);
}
// MainCreatePost();
