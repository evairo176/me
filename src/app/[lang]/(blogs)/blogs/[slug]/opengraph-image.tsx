/* eslint-disable @next/next/no-img-element */

import { getDetailBlog } from "@/features/api/Blog";
import { dateToHumanDate } from "@/helper";
import { BlogInterface } from "@/types/user-types";
import { ImageResponse } from "next/server";

export const size = {
  width: 1200,
  height: 630,
};
export const alt = "My Blog and Portofolios";
export const contentType = "image/png";

export default async function og({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  // Get Data blog
  const dataBlog = await getDetailBlog({
    slug: slug,
    lang: lang as string,
  });
  const blog: BlogInterface = dataBlog.blog;

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center p-4">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1 object-cover w-full h-full object-center"
            src={`${blog?.image}`}
            alt={blog?.title as string}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50 ">
          {/* Title */}
          <div tw="text-[60px]">{blog?.title}</div>
          {/* Description */}
          <div tw="text-2xl max-w-4xl">{blog?.des}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-3xl text-neutral-200">
            <div tw={`font-medium text-indigo-600`}>
              {blog?.Categories.name}
            </div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
            <div>{`${blog?.Author.name}`}</div>
            {/* <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{getReadingTime(post?.body!!, lang)}</div> */}
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{dateToHumanDate(blog?.createdAt?.toString())}</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
