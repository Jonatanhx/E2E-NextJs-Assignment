import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "../prisma/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
      },
      authorize: async (credentials: Partial<Record<"email", unknown>>) => {
        const email = credentials?.email as string | undefined;
        if (!email) {
          throw new Error("Email not provided or invalid");
        }

        const foundUser = await db.user.findFirst({
          where: {
            email: email,
          },
        });

        const user = {
          name: foundUser?.name ?? "",
          email: foundUser?.email,
          profilePicture: foundUser?.profilePicture || "",
        };
        return user;
      },
    }),
  ],
});
