interface GetAllLanguageIntercace {
  axiosAuth: any;
}

// get all role
export const getAllLanguage = async ({
  axiosAuth,
}: GetAllLanguageIntercace) => {
  const response = await axiosAuth.get(`/language`);

  return response.data.language;
};
