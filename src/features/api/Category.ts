import { axiosAuth } from "@/lib/axios";
import config from "@/utils/config";

// get category by slug
export const getCategoryBySlug = async ({
  lang,
  categorySlug,
}: {
  lang: string;
  categorySlug: string;
}) => {
  const response = await axiosAuth.get(
    `/category/${categorySlug}?lang=${lang}`
  );

  return response.data.category;
};
