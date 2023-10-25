import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import axios from "axios";

export const authOption: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`,
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );
          if (response.data) {
            return {
              ...response.data.user,
              name: response.data.user.fullname,
              token: response.data.token,
            };
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.id = user.id;
        token.token = user.token;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.id;
      session.user.token = token.token;
      session.user.name = token.name;

      return session;
    },
  },
};

const handler = nextAuth(authOption);

export { handler as GET, handler as POST };
