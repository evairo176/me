import config from "@/utils/config";

// get category by slug
export const getCategoryBySlug = async ({
  lang,
  categorySlug,
}: {
  lang: string;
  categorySlug: string;
}) => {
  const res = await fetch(
    `${config["BACKEND_URL"]}/category/${categorySlug}?lang=${lang}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
