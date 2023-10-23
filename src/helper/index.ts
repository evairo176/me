import moment from "moment";

export const dateToHumanDate = (date: string) => {
  const result = moment(date).format("DD MMM YYYY");
  return result;
};
