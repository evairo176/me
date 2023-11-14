import CategoryModule from "@/components/modules/Blogs/CategoryModule";
import siteConfig from "@/constans/siteConfig";
import { getAllBlogByCategorySlug } from "@/features/api/Blog";
import { getCategoryBySlug } from "@/features/api/Category";
import { capitalizeFirstLetter } from "@/helper";
import { getDictionary } from "@/lib/getDictionaries";
import { BlogInterface, CategoryInterface } from "@/types/user-types";
import React, { cache } from "react";

export const generateMetadata = async ({
  params: { lang, slug },
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const dictionary = await getDictionary(lang);

  const category: CategoryInterface = await getAllCategoryData({ lang, slug });

  return {
    title: {
      // template: "All Blogs | " + lang,
      default: category?.name + " | " + lang,
    },
    description: dictionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: dictionary.footer.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
          width: 1200,
          height: 628,
        },
      ],
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en/blogs/${slug}`,
        "id-ID": `${process.env.NEXT_PUBLIC_SITE_URL}/id/blogs/${slug}`,
        "ru-RU": `${process.env.NEXT_PUBLIC_SITE_URL}/ru/blogs/${slug}`,
        "zh-Hant": `${process.env.NEXT_PUBLIC_SITE_URL}/cn/blogs/${slug}`,
      },
    },
  };
};

const getAllCategoryData = cache(
  async ({ lang, slug }: { lang: string; slug: string }) => {
    try {
      const allCategory = await getCategoryBySlug({
        categorySlug: slug as string,
        lang: lang as string,
      });

      return allCategory;
    } catch (error) {
      console.log(error);
    }
  }
);
const getAllBlogData = cache(
  async ({ lang, slug }: { lang: string; slug: string }) => {
    try {
      const allBlog = await getAllBlogByCategorySlug({
        lang: lang as string,
        categorySlug: slug as string,
      });

      return allBlog;
    } catch (error) {
      console.log(error);
    }
  }
);

const Category = async ({
  params: { lang, slug },
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const allCategory: CategoryInterface = await getAllCategoryData({
    lang,
    slug,
  });
  const AllBlogByCategory = await getAllBlogData({
    lang,
    slug: allCategory?.slug,
  });

  return <CategoryModule AllBlogByCategory={AllBlogByCategory} />;
};

export default Category;
