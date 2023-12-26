import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import siteConfig from "@/constans/siteConfig";
import Image from "next/image";
import React from "react";

type Props = {};

const CtaCard = (props: Props) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 bg-card text-card-foreground py-32">
      <div className="">
        <div className="overflow-hidden relative mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-card-foreground  sm:text-4xl">
              Our people
            </h2>
            <p className="mt-6 text-xl leading-8 text-card-foreground ">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="mt-6 text-base leading-7 text-card-foreground ">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
            <div className="mt-10 flex">
              <Button type="button" variant={"default"}>
                Join our team{" "}
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-card/50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-card/50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-card/50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative overflow-hidden rounded-md  px-6 py-10">
    //   <div className="absolute inset-0 z-1 bg-gradient-to-br from-white/95 via-white/70 dark:from-black/95 dark:via-black/70 dark:to-black/30" />
    //   <Image
    //     fill
    //     className="object-cover object-center"
    //     src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHw2fHxOZXclMjBZb3J8ZW58MHx8fHwxNjcwMjUzMzMw&ixlib=rb-4.0.3"
    //     alt="CTA card image"
    //   />
    //   <div className="relative z-2">
    //     <div className="text-lg font-medium text-primary-foreground ">
    //       #ExplorerTheWorld
    //     </div>
    //     <h3 className="mt-3 text-4xl font-semibold text-primary-foreground">
    //       {siteConfig.ctaCard.title}
    //     </h3>
    //     <p className="mt-3 max-w-lg text-lg text-primary-foreground">
    //       {siteConfig.ctaCard.description}
    //     </p>
    //     <form action={"#"} className="mt-6 flex items-center gap-2">
    //       <Input
    //         type="email"
    //         name="email"
    //         className="w-full rounded-md bg-white/80 px-3 py-2 text-base outline-none ring-neutral-600 placeholder:text-sm focus:ring-2 md:w-auto"
    //       />
    //       <Button variant={"default"} type="submit">
    //         Submit
    //       </Button>
    //     </form>

    //     {/* <div className="mt-5 text-neutral-700">
    //       {dictionary.ctaCard.subscribersText1}{" "}
    //       <span className="rounded-md bg-neutral-700 px-2 py-1 text-sm text-neutral-100">{`12`}</span>{" "}
    //       <span className="rounded-md bg-neutral-700 px-2 py-1 text-sm text-neutral-100">{`${subscribersCount}`}</span>{" "}
    //       {dictionary.ctaCard.subscribersText2}
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default CtaCard;
