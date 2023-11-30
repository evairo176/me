import { DefaultJWT } from "next-auth/jwt";
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
      Role: {
        id: string;
        name: string;
        status: string;
        description: string;
        Permission: {
          id: string;
          name: string;
          description: string;
        };
      };
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

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    Role: {
      id: string;
      name: string;
      status: string;
      description: string;
      Permission: {
        id: string;
        name: string;
        description: string;
      };
    };
  }
}
