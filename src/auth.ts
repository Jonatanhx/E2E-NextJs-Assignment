import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
      },
      authorize: async (credentials) => {
        let user = null;

        user = {
          id: "1",
          name: "Jonatan Helander",
          email: "jonatanhelander@hotmail.com",
          profilePicture:
            "https://avatars.githubusercontent.com/u/143586594?v=4",
        };

        if (!user) {
          throw new Error("User not found.");
        }

        return user;
      },
    }),
  ],
});
