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

async function main() {
  await seedUser();
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
