"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { PiSpinner } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { signInSchema } from "@/utils/form-schema";
import { Separator } from "@/components/ui/separator";

type Props = {};

const SignInPage = ({}: {}) => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const [isLoading, setIsloading] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams();

  const loginWithGoogle = () =>
    signIn("google", {
      callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/${params?.lang}/admin/dashboard`,
    });

  const onSubmit = async (val: z.infer<typeof signInSchema>) => {
    setIsloading(true);
    const authenticated = await signIn("credentials", {
      ...val,
      redirect: false,
    });

    if (authenticated?.error) {
      toast.error("Authentication Error");
      setIsloading(false);
      return;
    }
    setIsloading(false);
    router.push("/admin/dashboard");
    toast.success("Login Successfully");
  };

  return (
    <div className="relative w-full h-screen">
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="border border-border p-5">
          <div className="font-semibold text-center text-2xl mb-2">
            Login your account
          </div>
          <div className="text-sm text-gray-500">
            Enter your E-mail to access dashboard
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 space-y-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-full">
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-full">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} className="w-full">
                {isLoading ? <PiSpinner /> : "Sign In"}
              </Button>
              <Separator />
              <Button
                type="button"
                onClick={loginWithGoogle}
                variant={"outline"}
                className="w-full "
              >
                <FcGoogle className="mr-2" /> Google
              </Button>

              <div className="text-sm">
                Dont have an account{" "}
                <Link className="text-blue-500" href="/auth/signup">
                  sign up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
