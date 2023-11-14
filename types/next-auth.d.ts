import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      username: string;
      image: string;
      token: string;
      refreshToken: string;
    };
  }
  interface Profile {
    name: string;
    picture: string;
    email: string;
    given_name: string;
    family_name: string;
  }
}
