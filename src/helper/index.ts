import moment from "moment";
import { AuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const dateToHumanDate = (date: string) => {
  const result = moment(date).format("DD MMM YYYY");
  return result;
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
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
              name: response.data.user.name,
              token: response.data.token,
              refreshToken: response.data.refreshToken,
            };
          } else {
            return null;
          }
        } catch (error: any) {
          throw new Error(error.response.data.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        // call the signToken function which returns a JWT token
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login/provider`,
            {
              email: user?.email as string,
            }
          );

          const data = {
            ...token,
            ...response.data.user,
            token: response.data.token,
            refreshToken: response.data.refreshToken,
          };

          token = data;
        } catch (error) {
          console.log(error);
        }

        // console.log({ satu: response.data });
        // const token = await SignToken(user?.email as string);
      }
      // the token object is passed done to the session call back for persistence
      return token;
    },
    async session({ session, token, user }) {
      session.user = token as any;

      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // first axios request to ascertain if our user exists in our custom DB
      // const response = await axios.post(
      //   "http://localhost:9000/v1/auth/userExists",
      //   { email: profile.email }
      // );
      // if()

      try {
        const checkuser = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/auth/usercheck`,
          {
            email: profile?.email as string,
          }
        );

        // if (profile?.email === "semenjakpetang176@gmail.com") {
        if (checkuser?.data?.user === true) {
          // user exists return true passing control to the next callback
          return true;
        } else {
          // second axios call which creates a new user in our database

          try {
            const data = {
              name: profile?.name,
              email: profile?.email,
              image: profile?.picture,
              password: generateRandomPassword(18),
            };

            await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/register/provider`,
              data
            );
            return true;
          } catch (error) {
            console.log(error);
            return false;
          }
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    // async signIn({ account, profile }) {
    //   if (account?.provider === "google") {
    //     //check if user is in your database
    //     const userExist = await prisma.user.findFirst({
    //       where:{
    //         email:profile.email
    //       }
    //     })
    //     if(!userExist){
    //       await prisma.user.create({

    //       })
    //     }
    //     return true
    //     // const response = await axios.post(
    //     //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/register`,
    //     //   {
    //     //     email: profile?.email,
    //     //     password: "",
    //     //     fullname: profile?.name,
    //     //   }
    //     // );
    //     // if (response.data) {
    //     //   return true;
    //     // } else {
    //     //   return false;
    //     // }
    //   }
    // },
  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === "development",
};

const generateRandomPassword = (length: number) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};
