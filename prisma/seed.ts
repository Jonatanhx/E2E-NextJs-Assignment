import db from "./db";

async function seedUser() {
  await db.user.upsert({
    where: { id: 1 },
    update: {
      name: "Jonatan Helander",
      email: "jonatanhelander@hotmail.com",
      profilePicture: "https://avatars.githubusercontent.com/u/143586594?v=4",
    },
    create: {
      name: "Jonatan Helander",
      email: "jonatanhelander@hotmail.com",
      profilePicture: "https://avatars.githubusercontent.com/u/143586594?v=4",
    },
  });
}

async function seedPost() {
  await db.post.upsert({
    where: { id: 1 },
    update: {
      title: "I really really really like this image",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam ipsum id rem tempora eum reprehenderit veritatis totam impedit commodi, eius quod nulla temporibus velit expedita at illum vitae doloribus?",
      image: "https://i.redd.it/3evmhs7plp621.png",
    },
    create: {
      title: "I really really really like this image",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam ipsum id rem tempora eum reprehenderit veritatis totam impedit commodi, eius quod nulla temporibus velit expedita at illum vitae doloribus?",
      image: "https://i.redd.it/3evmhs7plp621.png",
      author: {
        connect: { id: 1 },
      },
    },
  });
}

async function main() {
  await seedUser();
  await seedPost();
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
