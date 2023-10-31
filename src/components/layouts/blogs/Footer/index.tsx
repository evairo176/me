import SocialLink from "@/components/elements/SocialLink";
import siteConfig from "@/constans/siteConfig";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-10 border-t pt-6">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div>
          <h2 className="text-3xl font-bold dark:text-neutral-300">
            {siteConfig?.siteName}
          </h2>
          <p className="mt-2 max-w-md text-lg text-neutral-700">
            {siteConfig.footer.description}
          </p>
        </div>
        {/* social media dan currently at  */}
        <div className="mt-6 flex flex-wrap justify-between gap-4">
          <div>
            <div className="text-lg font-medium dark:text-neutral-400">
              #ExplorerTheWorld
            </div>
            <div className="mt-2 flex items-center gap-3 text-neutral-600">
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLink.linkedin}
              />
              <SocialLink
                platform="facebook"
                link={siteConfig.socialLink.facebook}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLink.github}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLink.website}
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">
              {siteConfig.footer.currentlyAtText}
            </div>
            <div className="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-md">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* buttom section  */}
        <div className="item-center mt-16 flex flex-wrap justify-between gap-4 border-t py-3">
          <div className="text-sm text-neutral-400">
            {siteConfig.footer.rightText} {new Date().getFullYear()}
          </div>
          <div className="text-sm dark:text-neutral-400">
            {siteConfig.footer.creatorText}{" "}
            <Link
              className="underline underline-offset-4"
              href={`${siteConfig.socialLink.website}`}
            >
              @evairo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
