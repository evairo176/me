import moment from "moment";

export const dateToHumanDate = (date: string) => {
  const result = moment(date).format("DD MMM YYYY");
  return result;
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
