import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import siteConfig from "@/constans/siteConfig";
import Image from "next/image";
import React from "react";

type Props = {};

const CtaCard = (props: Props) => {
  return (
    <div className="relative overflow-hidden rounded-md  px-6 py-10">
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-white/95 via-white/70 dark:from-black/95 dark:via-black/70 dark:to-black/30" />
      <Image
        fill
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHw2fHxOZXclMjBZb3J8ZW58MHx8fHwxNjcwMjUzMzMw&ixlib=rb-4.0.3"
        alt="CTA card image"
      />
      <div className="relative z-20">
        <div className="text-lg font-medium">#ExplorerTheWorld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          {siteConfig.ctaCard.title}
        </h3>
        <p className="mt-3 max-w-lg text-lg">
          {siteConfig.ctaCard.description}
        </p>
        <form action={"#"} className="mt-6 flex items-center gap-2">
          <Input
            type="email"
            name="email"
            className="w-full rounded-md bg-white/80 px-3 py-2 text-base outline-none ring-neutral-600 placeholder:text-sm focus:ring-2 md:w-auto"
          />
          <Button variant={"default"} type="submit">
            Submit
          </Button>
        </form>

        {/* <div className="mt-5 text-neutral-700">
          {dictionary.ctaCard.subscribersText1}{" "}
          <span className="rounded-md bg-neutral-700 px-2 py-1 text-sm text-neutral-100">{`12`}</span>{" "}
          <span className="rounded-md bg-neutral-700 px-2 py-1 text-sm text-neutral-100">{`${subscribersCount}`}</span>{" "}
          {dictionary.ctaCard.subscribersText2}
        </div> */}
      </div>
    </div>
  );
};

export default CtaCard;
