import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      fullname: string;
      email: string;
      username: string;
      profile_img: string;
      token: string;
      refreshToken: string;
    };
  }
}
