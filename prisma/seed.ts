import db from "./db";

async function seedUser() {
  await db.user.upsert({
    where: { id: 1 },
    update: {
      name: "jonatan helander",
    },
    create: {
      name: "jonatan helander",
      email: "jonatanhelander@hotmail.com",
    },
  });
}

async function seedPost() {
  await db.post.upsert({
    where: { id: 1 },
    update: {
      title: "My first seeded post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam ipsum id rem tempora eum reprehenderit veritatis totam impedit commodi, eius quod nulla temporibus velit expedita at illum vitae doloribus?",
    },
    create: {
      title: "My first seeded post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam ipsum id rem tempora eum reprehenderit veritatis totam impedit commodi, eius quod nulla temporibus velit expedita at illum vitae doloribus?",
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
