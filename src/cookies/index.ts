"use server";
import { cookies } from "next/headers";

export async function createCookies(name: string, value: any, expires?: any) {
  const oneDay = 24 * 60 * 60 * 1000;
  const expiresSet = expires ? expires : Date.now() - oneDay;
  cookies().set(name, value, { expires: expiresSet });
}
export async function getCookies(name: string) {
  const cookieStore = cookies();
  const value = cookieStore.get(name);
  return value;
}
